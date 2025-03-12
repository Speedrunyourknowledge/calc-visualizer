import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router"
import IntCustomGraph from "../components/Custom/IntCustomGraph.tsx"
import {parse} from '@khanacademy/kas'

function CustomInt() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const ending = useRef<HTMLDivElement>(null);

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

    editMF.current = MQ.current.MathField(edit.current, { 
      handlers: {
        edit: function() { 
          let expr;
          try{
            // Use print(false) if you want log(x, base) as the output
            // The default is base_first = true, which prints log(base, x)
            expr = parse(editMF.current.latex()).expr.print()

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

    MQ.current.StaticMath(ending.current, { })

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

        <div ref={edit} style={{height:'fit-content', alignSelf:'center', marginRight:'.25rem'}}> </div>

        <div ref={ending} style={{height:'fit-content', alignSelf:'center'}}> 
          \mathrm&#123;d&#125;x
        </div>

      </div>

      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header' ref={output}> </div>
        
      <div className="flex graph-outer-box" style={{justifyContent: "center"}}>
        <IntCustomGraph />
      </div>

    </div>
  )
}

export default CustomInt