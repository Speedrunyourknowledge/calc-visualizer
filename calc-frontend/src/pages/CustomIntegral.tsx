import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router"
import IntCustomGraph from "../components/Custom/IntCustomGraph.tsx"
import {generateFunction, validateBounds} from "../functions/mathOutput";

function CustomInt() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const ending = useRef<HTMLDivElement>(null);

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

      <div className="center-header flex flex-wrap justify-center gap-[.5rem]">
        <div ref={container} >
          \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;5&#125;
        </div>

        <div style={{height:'fit-content', alignSelf:'center'}}>
          <div ref={edit} style={{marginRight:'.25rem'}}> 
            x
          </div>

          <div ref={ending}> 
            \mathrm&#123;d&#125;x
          </div>
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