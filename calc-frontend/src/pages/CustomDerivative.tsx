import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router"
import {generateFunction, validateBounds} from "../functions/mathOutput";
import DerivCustomGraph from "../components/Custom/DerivCustomGraph";

import axios from "axios";
import SaveFunctionButton from "../components/ui/SaveFunctionButton.tsx";
import AskAIButtonDerivative from "@/components/ui/AskAIButtonDerivative.tsx";

import { toast } from "sonner";
import { Session } from "../lib/auth-client";

function CustomDeriv() {

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

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const [func, setFunc] = useState<string>('');
  const [bounds, setBounds] = useState<number[]>([0,0]);
  const [formatCheck, setFormatCheck] = useState<string>('');

  const [saving, setSaving] = useState<boolean>(false);
  const [enableSave, setEnableSave] = useState<boolean>(false);
  const [funcKey, setFuncKey] = useState<string>('');

  const [canAskAI, setCanAskAI] = useState<boolean>(false);
  const [JSFunc, setJSFunc] = useState<string>('');
  const [LatexFunc, setLatexFunc] = useState<any>();

  const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

  const handleSave = () => {
    setEnableSave(false)
  }

  const handleAIResponseComplete = () => {
    setCanAskAI(false);
  }

  // need to check if func is unique first
  const saveFunction = async (session: Session) => {

    // check if function has been graphed
    if(func === ''){
      setFormatCheck('Graph a function first')
      return
    }

    // latex version of function is saved
    const equation = editMF.current.innerFields[0].latex();
    const lowerBound = bounds[0];
    const upperBound = bounds[1];
    const topic = "Derivative";
    const userId = session?.user.id || "";
    
    try {
      setSaving(true) // show loading while saving

      // create-integral handles any topic
      await axios.post(serverUrl + `/func/create-integral/${userId}`, {
        equation,
        lowerBound,
        upperBound,
        topic,
      },
      { withCredentials:true}
    )

      toast.success("Function Saved Successfully!");
    } 
    catch (error) {
      toast.error("Function Failed to Save");
      console.error("save function error: ",error);
    }
    finally{
      setSaving(false)
      // disable save until new graph is created
      setEnableSave(false)
    }

  }

  /*
    Updates the function and the bounds with the user input
    Returns 1 if input is invalid
  */
  const generateOutput = (python_code?: boolean):number =>{
    const funcLatex:string = editMF.current.innerFields[0].latex()
    let newFunc:string;
    let newJSFunc:string;
    let newLowerBound:number;
    let newUpperBound:number;
    let newFuncKey:string;

    // check if function is valid
    try{
      newFunc = generateFunction(funcLatex, python_code ?? true)

      newJSFunc = generateFunction(funcLatex, false); // func for AI
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
    newLowerBound = parseFloat(lowerBound)
    newUpperBound = parseFloat(upperBound)

    setFunc(newFunc)
    setJSFunc(newJSFunc);
    setBounds([newLowerBound, newUpperBound])
    setLatexFunc(editMF.current.innerFields[0].latex());

    newFuncKey = newFunc + newLowerBound + newUpperBound
    // check that new graph is different from old one
    if(newFuncKey !== funcKey){
      setFuncKey(newFuncKey)
      setCanAskAI(true);
    }

    setFormatCheck('')

    return 0
  }

  // sets up the user input field
  useLayoutEffect(() =>{
    //@ts-ignore Cannot find MathQuill
    MQ.current = MathQuill.getInterface(2);

    containerMF.current = MQ.current.StaticMath(container.current, { }) // for the bounds

    editMF.current = MQ.current.StaticMath(edit.current, { })    // for the function

    editMF.current.innerFields[0].config({
        handlers: {
          enter: generateOutput
        }
      })

    editMF.current.innerFields[0].latex(state.func) // initialize with a function

    containerMF.current.innerFields[0].latex(state.bounds[0]) // initialize bounds
    containerMF.current.innerFields[1].latex(state.bounds[1]) 

  }, [])

  useEffect(() => {

    // new graph was created, enable saving
    if(funcKey !== ''){
      setEnableSave(true)
    }

  }, [funcKey])

  return(
    <div>
      <div className="center-header flex flex-wrap justify-center gap-[.25rem] mt-[.25rem]
        edit-box" style={{alignItems:'center', marginBottom:'.75rem'}}>

        <div ref={edit} className="edit-down mr-[.25rem"> 
        \frac&#123;d&#125;&#123;dx&#125;(\MathQuillMathField&#123;x&#125;)
        </div>
        <div ref={container} className="mr-[1rem]" style={{fontSize:'1.75rem'}}>
        \MathQuillMathField&#123;0&#125; \leq x \leq \MathQuillMathField&#123;5&#125;
        </div>

        <button className="go-button brighten mr-[.75rem]" onClick={()=>generateOutput()}> Graph</button>

        <SaveFunctionButton onSave={saveFunction} saving={saving} enableSave={enableSave}></SaveFunctionButton>
      </div>

      {
        formatCheck === ''? func === ''? null :
            <div className="graph-outer-box" style={{justifyContent: "center", marginTop:'.5rem', marginBottom:'1rem'}}>
              <DerivCustomGraph key={funcKey} func={func} lowerBound = {bounds[0]} upperBound = {bounds[1]}
              handleSave={handleSave} onAIResponseComplete={handleAIResponseComplete}/>
            </div> 
          :
          <div className="center-header pad-sm" style={{fontSize:'1.25rem', color:'red', marginTop:'.5rem',
            maxWidth:'550px'}}>
            {formatCheck}
          </div>
      } 

      <div className="ai-container">
        <div></div>

        <AskAIButtonDerivative func={JSFunc} lowerBound={bounds[0]} upperBound={bounds[0]} key={funcKey} 
        canAskAI={canAskAI} displayFunc={LatexFunc} onAIResponseComplete={handleAIResponseComplete}
        />
      </div>

          
    </div>
    
  )
}

export default CustomDeriv