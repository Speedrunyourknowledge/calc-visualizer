import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router"
import IntCustomGraph from "../components/Custom/IntCustomGraph.tsx"
import generateFunction from "../functions/mathOutput";

function CustomInt() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const ending = useRef<HTMLDivElement>(null);

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const [func, setFunc] = useState<string>('');
  const [bounds, setBounds] = useState<number[]>([0,5]);

  // sends input to plotly
  /*
  const sendInput = ()=>{

    let input = "hi";

    return(
      input
    )
  }
  */

  // Updates the function and the bounds with the user input
  // Returns 1 if error occured
  const generateOutput = ():number =>{
    const funcLatex = editMF.current.latex()
    let newFunc: string;
    try{
      // check if function is valid
      newFunc = generateFunction(funcLatex)

      // empty string was entered
      if(newFunc == ''){
        console.log('Please enter a valid function')
        return 1
      }

    }
    catch(e){
      console.log('Please enter a valid function')
      return 1
    }

    const lowerBound = containerMF.current.innerFields[0].latex()
    const upperBound = containerMF.current.innerFields[1].latex()

    const lowerNum = parseFloat(lowerBound)
    const upperNum = parseFloat(upperBound)

    if(isNaN(lowerNum) || isNaN(upperNum)){
      console.log('The upper and lower bounds must be numbers')
      return 1
    }

    if(lowerNum < upperNum){
      // bounds are valid
    }
    else{
      console.log('The lower bound must be less than the upper bound')
      return 1
    }
    // if input is valid, set all variables
    setFunc(newFunc)
    setBounds([lowerBound, upperBound])

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
    
  }, [])


  return(
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <div className="center-header flex flex-wrap">
        <div ref={container} >
          \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;5&#125;
        </div>

        <div ref={edit} style={{height:'fit-content', alignSelf:'center', marginRight:'.25rem'}}> 
          x
        </div>

        <div ref={ending} style={{height:'fit-content', alignSelf:'center'}}> 
          \mathrm&#123;d&#125;x
        </div>

      </div>

      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header'> 
        {func} &nbsp;&nbsp;{bounds.join(', ')}
      </div>
        
      <div className="flex graph-outer-box" style={{justifyContent: "center"}}>
        <IntCustomGraph />
      </div>

    </div>
  )
}

export default CustomInt