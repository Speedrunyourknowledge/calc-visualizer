import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router"
import {generateFunction, validateBounds} from "../functions/mathOutput";

function CustomDeriv() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const [func, setFunc] = useState<string>('');
  const [bounds, setBounds] = useState<number[]>([0,5]);

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
      console.log('Please enter a valid function')
      return 1
    }

    const lowerBound:string = containerMF.current.innerFields[0].latex()
    const upperBound:string = containerMF.current.innerFields[1].latex()

    const checkBounds = validateBounds(lowerBound, upperBound)

    // check if bounds are valid
    if(checkBounds !== 'success'){
      console.log(checkBounds)
      return 1
    }

    // input is valid, so set all variables
    setFunc(newFunc)
    setBounds([parseFloat(lowerBound), parseFloat(upperBound)])

    return 0
  }

  // sets up the user input field
  useLayoutEffect(() =>{
    //@ts-ignore Cannot find MathQuill
    MQ.current = MathQuill.getInterface(2);

    containerMF.current = MQ.current.StaticMath(container.current, { }) // for the bounds

    editMF.current = MQ.current.StaticMath(edit.current).innerFields[0] // for the function

    // updates the output whenever 'enter' is pressed
    editMF.current.config({
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

      <div className="center-header flex flex-wrap justify-center gap-[1rem]">
        <div ref={container}>
          \MathQuillMathField&#123;0&#125; \leq x \leq \MathQuillMathField&#123;5&#125;
        </div>

        <div ref={edit}> 
          y = \MathQuillMathField&#123;x&#125;
        </div>

      </div>

      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header'> 
        {func} &nbsp;&nbsp;{bounds.join(', ')}
      </div>
        
      <div className="graph-outer-box" style={{justifyContent: "center"}}>
        The graph will go here
      </div>

    </div>
  )
}

export default CustomDeriv