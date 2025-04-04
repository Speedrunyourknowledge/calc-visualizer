import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router"
import {generateFunction, validateBounds} from "../functions/mathOutput";

function CustomDeriv() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const start = useRef<HTMLDivElement>(null);

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  //@ts-ignore not used
  const [func, setFunc] = useState<string>('');
  //@ts-ignore not used
  const [bounds, setBounds] = useState<number[]>([0,5]);
  //@ts-ignore not used
  const [formatCheck, setFormatCheck] = useState<string>('');

  /*
    Updates the function and the bounds with the user input
    Returns 1 if input is invalid
  */
  const generateOutput = ():number =>{
    const funcLatex:string = editMF.current.latex()
    let newFunc:string;

    // check if function is valid
    try{
      newFunc = generateFunction(funcLatex)
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

    MQ.current.StaticMath(start.current, { }) // for the y =

    // updates the output whenever 'enter' is pressed
    editMF.current = MQ.current.MathField(edit.current, { 
      handlers: {
        enter: generateOutput
      }
    })

  }, [])


  return(
    <div>
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>

      <div className="center-header flex flex-wrap justify-center gap-[1rem]" style={{alignItems:"center"}}>
        <div ref={container}>
          \MathQuillMathField&#123;0&#125; \leq x \leq \MathQuillMathField&#123;5&#125;
        </div>

        <div>
          <div ref={start}> 
            y =
          </div>

          <div ref={edit} className = "edit-box"> 
            x
          </div>
        </div>

      </div>

      <div className="center-header" style={{fontSize:'1.5rem'}}>
        Coming Soon
      </div>

    </div>
  )
}

export default CustomDeriv