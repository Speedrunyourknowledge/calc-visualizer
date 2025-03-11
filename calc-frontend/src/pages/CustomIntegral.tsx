import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router"
import IntCosineGraph from "../components/Cosine/IntCosineGraph.tsx"
import Select from "react-select";
import {parse} from '@khanacademy/kas'

function CustomInt() {

  const container = useRef<HTMLDivElement>(null);
  const MQ = useRef<any>(null);
  const containerMF = useRef<any>(null);
  const edit = useRef<HTMLDivElement>(null);
  const editMF = useRef<any>(null);
  const output = useRef<HTMLDivElement>(null);
  const [func, setFunc] = useState<string>('linear')

  const funcList = [
    { value: 'linear', label: 'Linear' },
    { value: 'quadratic', label: 'Quadratic' },
    { value: 'cubic', label: 'Cubic' },
    { value: 'exp', label: 'Exponential' },
    { value: 'log', label: 'Logarithmic' },
    { value: 'sin', label: 'Sine' },
    { value: 'cos', label: 'Cosine' },
    { value: 'tan', label: 'Tangent' },
  ]

  // sends input to plotly
  /*
  const sendInput = ()=>{

    let input = "hi";

    return(
      input
    )
  }
  */

  // updates the math container with the chosen function
  const chooseFunction = () =>{

    switch(func) {
      case 'sin': 
        return <div ref={container} >
          \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;5&#125; \MathQuillMathField1 
          \sin(\MathQuillMathField1 x) + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
        </div>
      case 'cos': 
        return <div ref={container} >
          \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;5&#125; \MathQuillMathField1 
          \cos(\MathQuillMathField1 x) + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
        </div>
      case 'tan': 
        return <div ref={container} >
          \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;1.5&#125; \MathQuillMathField1 
          \tan(\MathQuillMathField1 x) + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
        </div>
      case 'linear': 
      return <div ref={container} >
        \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;10&#125; \MathQuillMathField1 
        x + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
      </div>
      case 'quadratic': 
      return <div ref={container} >
        \int_\MathQuillMathField&#123;-5&#125;^\MathQuillMathField&#123;5&#125; \MathQuillMathField1 
        x^&#123;2&#125; + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
      </div>
      case 'cubic': 
      return <div ref={container} >
        \int_\MathQuillMathField&#123;-2&#125;^\MathQuillMathField&#123;4&#125; \MathQuillMathField1 
        x^&#123;3&#125; + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
      </div>
      case 'exp': 
      return <div ref={container} >
        \int_\MathQuillMathField&#123;0&#125;^\MathQuillMathField&#123;10&#125; 
        \MathQuillMathField1^&#123;\MathQuillMathField1 x&#125; + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
      </div>
      case 'log': 
      return <div ref={container} >
        \int_\MathQuillMathField&#123;.01&#125;^\MathQuillMathField&#123;10&#125; \MathQuillMathField1 
        \log_\MathQuillMathField1 (\MathQuillMathField1 x) + \MathQuillMathField0 \quad \mathrm&#123;d&#125;x
      </div>
      default: 
        return null
    }
  }

  useLayoutEffect(() =>{
    //@ts-ignore Cannot find MathQuill
    MQ.current = MathQuill.getInterface(2);

    editMF.current = MQ.current.MathField(edit.current, { 
      handlers: {
        edit: function() { 

          let expr = parse(editMF.current.latex()).expr

          if(output.current){
            output.current.textContent = expr.print(); 
          }

          console.log(parse('sin(5)').expr.print())
        }
      }
    })
    
  }, [])

  // prepare math container
  useLayoutEffect(() =>{
    
    containerMF.current = MQ.current.StaticMath(container.current, { })

  }, [func])


  return(
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <div className="center-header flex flex-wrap gap-2" style={{marginBottom:'0.5rem'}}>
        {chooseFunction()}

        <Select 
          className="select-container"
          menuPortalTarget={document.body}
          defaultValue={funcList[0]}
          options={funcList}
          isSearchable = {true}
          // @ts-ignore: opt is possibly 'null'
          onChange={(opt)=>setFunc(opt.value)}
        />
      </div>

      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header' ref={edit}> </div>
      <div style={{display:'block', marginBottom:'0.5rem'}} className='center-header' ref={output}> </div>
        
      <div className="flex graph-outer-box" style={{justifyContent: "center"}}>
        <IntCosineGraph />
      </div>

    </div>
  )
}

export default CustomInt