import { useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router"
import IntCustomGraph from "../components/Custom/IntCustomGraph.tsx"
import {generateFunction, validateBounds} from "../functions/mathOutput";
import { Blocks } from "react-loader-spinner";

import { Session } from "../lib/auth-client.ts";
import axios from "axios";
import SaveFunctionButton from "../components/ui/SaveFunctionButton.tsx";

function CustomInt() {

  const location = useLocation()
  let state = location.state

  // check if user navigated here from a previous page
  let prevLocation = true

  if(!state)
    prevLocation = false
  else if(!state.func || !state.bounds)
    prevLocation = false

  if(!prevLocation){
    state = {func: 'x^2', bounds: [0, 5]}
  }

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const ending = useRef<HTMLDivElement>(null);

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const [func, setFunc] = useState<string>('');
  const [bounds, setBounds] = useState<number[]>([0,0]);
  const [formatCheck, setFormatCheck] = useState<string>('');

  const [saving, setSaving] = useState<boolean>(false);

  // need to check if func is unique first
  const saveFunction = async (session: Session) => {

      // check if function has been graphed
      if(func === ''){
        setFormatCheck('Graph a function first')
        return
      }

      setSaving(true) // show loading while saving

      // latex version of function is saved
      const equation = editMF.current.latex();
      const lowerBound = bounds[0];
      const upperBound = bounds[1];
      const topic = "Integral";
      const userId = session.user.id;
      
      try {
        await axios.post(`http://localhost:3000/func/create-integral/${userId}`, {
          equation,
          lowerBound,
          upperBound,
          topic,
        },{
          headers: {
            Authorization: `Bearer ${session.session.token}`
          }
        })
        
      } 
      catch (error) {
        console.error("save function error: ",error);
      }
      finally{
        setSaving(false)
      }

    }
  

  /*
    Updates the function and the bounds with the user input
    Returns 1 if input is invalid
  */
  const generateOutput = (python_code?: boolean):number =>{
    const funcLatex:string = editMF.current.latex()
    let newFunc:string;

    // check if function is valid
    try{
      newFunc = generateFunction(funcLatex, python_code ?? true)
    }
    catch{
      setFormatCheck('Please enter a valid function')
      return 1
    }

    const lowerBound:string = containerMF.current.innerFields[0].latex()
    const upperBound:string = containerMF.current.innerFields[1].latex()

    const checkBounds = validateBounds(lowerBound, upperBound)

    // check if bounds are valid
    if(checkBounds !== 'success'){
      setFormatCheck(checkBounds)
      return 1
    }

    // input is valid, so set all variables
    setFunc(newFunc)
    setBounds([parseFloat(lowerBound), parseFloat(upperBound)])
    setFormatCheck('')

    return 0
  }
  
  // sets up the user input field
  useLayoutEffect(() =>{
    //@ts-ignore Cannot find MathQuill
    MQ.current = MathQuill.getInterface(2);

    containerMF.current = MQ.current.StaticMath(container.current, { }) // for the bounds

    MQ.current.StaticMath(ending.current, { }) // for the dx

    // updates the output whenever 'enter' is pressed
    editMF.current = MQ.current.MathField(edit.current, { 
      handlers: {
        enter: generateOutput
      }
    })

    editMF.current.latex(state.func) // initialize with a function

    containerMF.current.innerFields[0].latex(state.bounds[0]) // initialize bounds
    containerMF.current.innerFields[1].latex(state.bounds[1]) 
    
  }, [])


  return(
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Link to="/integrals" tabIndex={-1}>
          <button className="back-button"> Back</button>
        </Link>
      
        <SaveFunctionButton onSave={saveFunction}></SaveFunctionButton>

        <div></div>
      </div>

      {saving? 
        <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
          wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
          wrapperClass="blocks-wrapper" visible={true}
          />
        :
        null
      }

      <div className="center-header flex flex-wrap justify-center gap-[.5rem]" style={{alignItems:"center"}}>
        <div className="flex gap-[.5rem]">
          <div ref={container} >
            \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;5&#125;
          </div>

          <div style={{height:'fit-content', alignSelf:'center'}}>
            <div ref={edit} className = "edit-box" style={{marginRight:'.25rem'}}> 
              x
            </div>

            <div ref={ending} style={{marginRight:'.5rem'}}> 
              \mathrm&#123;d&#125;x
            </div>
          </div>
        </div>

        <button className="go-button brighten mb-[.5rem]" onClick={()=>generateOutput()}> Graph</button>
      </div>

      {
        formatCheck === ''? func === ''? null :
            <div className="graph-outer-box" style={{justifyContent: "center", marginTop:'.5rem'}}>
              <IntCustomGraph key={func + bounds[0].toString() + bounds[1].toString()} func={func} 
              lowerBound = {bounds[0]} upperBound = {bounds[1]}/>
            </div> 
          :
          <div className="center-header pad-sm" style={{fontSize:'1.25rem', color:'red', marginTop:'.5rem', 
            maxWidth:'550px'}}>
            {formatCheck}
          </div>
      } 

    </div>
  )
}

export default CustomInt