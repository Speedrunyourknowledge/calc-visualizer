import {parse} from '@khanacademy/kas'

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

/* 
  Parameters: a function written in latex
  Returns: a graphable math function
  Errors are handled by the caller
*/ 
const generateFunction = (functionLatex: string, base_first=true) =>{
  let newFunc;

  // Use print(false) if you want log(x, base) as the output
  // The default is base_first = true, which prints log(base, x)
  newFunc = parse(functionLatex).expr.print(base_first)

  console.log(pythonFormat(newFunc))

  return newFunc
}

export default generateFunction