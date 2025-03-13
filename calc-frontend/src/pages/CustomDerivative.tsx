import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router"
import {parse} from '@khanacademy/kas'

function CustomDeriv() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);

  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const output = useRef<HTMLDivElement>(null);

  // sends input to plotly
  /*
  const sendInput = ()=>{

    let input = "hi";

    return(
      input
    )
  }
  */

  const pythonFormat = (expr:string) =>{
    let regex = /([^sin|cos|tan|log]*)(sin|cos|tan|log)/g
    // numpy functions start with np.
    let editStr = expr.replace(regex, '$1np.$2'); 

    regex = /([^log]*)(log)/g
    // numpy log becomes np.emath.logn
    editStr = editStr.replace(regex, '$1emath.$2n'); 

    // numpy ln becomes np.log
    editStr = editStr.replaceAll("ln","np.log"); 

    editStr = editStr.replaceAll("^","**") // raise to power

    return editStr
  }

  useLayoutEffect(() =>{
    //@ts-ignore Cannot find MathQuill
    MQ.current = MathQuill.getInterface(2);

    editMF.current = MQ.current.StaticMath(edit.current).innerFields[0]

    editMF.current.config({
      handlers: {
        edit: function() { 
          let expr;
          try{
            // Use print(false) if you want log(x, base) as the output
            // The default is base_first = true, which prints log(base, x)
            expr = parse(editMF.current.latex()).expr.print()

            console.log(expr || 'nothing')

            if(output.current){
              output.current.textContent = expr; 
  
              console.log(pythonFormat(expr))
            }
          }
          catch(e){
            console.log(e)
          }
        }
      }
    })

  }, [])

  // prepare math container
  useLayoutEffect(() =>{
    
    containerMF.current = MQ.current.StaticMath(container.current, { })

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
          y = \MathQuillMathField1
        </div>

      </div>

      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header' ref={output}> </div>
        
      <div className="flex graph-outer-box" style={{justifyContent: "center"}}>
        The graph will go here
      </div>

    </div>
  )
}

export default CustomDeriv