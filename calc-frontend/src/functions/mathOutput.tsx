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
  Parameters: a function written in latex, a boolean that indicates
  whether you want a python-readable function or a javascript-readable function
  Returns: a math function readable by the chosen language
  Errors are handled by the caller
*/ 
const generateFunction = (funcLatex: string, python_code=true): string =>{
  let newFunc: string;

  /*
    The python version prints log(base, x)
    The javascript version prints log(x, base)
  */
  newFunc = parse(funcLatex).expr.print(python_code)

  // empty string was entered
  if(newFunc === ''){
    throw new Error('no empty strings allowed')
  }

  if(python_code){
    newFunc = pythonFormat(newFunc)
  }
  
  return newFunc
}

/* 
  Parameters: two strings representing the lower bound and upper bound
  Returns: a string indicating if the bounds are valid
*/ 
const validateBounds = (lowerBound:string, upperBound:string):string =>{

  const lowerNum = parseFloat(lowerBound)
  const upperNum = parseFloat(upperBound)

  if(isNaN(lowerNum) || isNaN(upperNum)){
    return('The upper and lower bounds must be numbers')
  }

  if(!(lowerNum < upperNum)){
    return('The lower bound must be less than the upper bound')
  }

  // bounds are valid
  return('success')
}

export {generateFunction, validateBounds}