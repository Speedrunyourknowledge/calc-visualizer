// @ts-nocheck

import { useLayoutEffect , useEffect, useState} from "react";
import axios from "axios";
import { Blocks } from "react-loader-spinner";

function IntCustomGraph({func, lowerBound, upperBound, handleSave, onAIResponseComplete}) {

  const [ready, setReady] = useState(false)
  const [success, setSuccess] = useState(false)
  const [plotlyObject, setPlotlyObject] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [showInfoMsg, setShowInfoMsg] = useState(false)

  useEffect(() => {

    const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

    let request = axios.post(serverUrl + '/graph/create-graph',
      {
        'func': func,
        'lowerBound': lowerBound,
        'upperBound': upperBound

      }
    )

    // add loading circle when ready is false
    setReady(false)
    setSuccess(false)

    request.then(response => {
      let graphObject = response.data

      // add config to object
      graphObject.config = {
        'scrollZoom': false,
        'displayModeBar': false,
        'doubleClick': false,
        'editable': false,
        'staticPlot': false
      }
    
      setSuccess(true)
      setPlotlyObject(graphObject)
    })
    .catch(function(e) {
      if(e.code === 'ERR_NETWORK'){
        setErrorMsg('Unable to connect to server')

        setShowInfoMsg(false)
      }
      else if(e.status === 422){
        setErrorMsg('Your function could not be graphed. \
          Try a different function or change \
          the bounds')

        setShowInfoMsg(true)
      }
      else{
        setErrorMsg('Your function could not be graphed. \
          Try a different function or change \
          the bounds')

        setShowInfoMsg(true)
      }
      // disable save button
      handleSave();
      // disable ask AI
      onAIResponseComplete();
    })
    .finally(() =>{
      setReady(true)
    })

  },[])

  useLayoutEffect(() => {
    if(success){
      try{
        window.PLOTLYENV = window.PLOTLYENV || {};
        if(document.getElementById("plotly_graph")) {
          Plotly.newPlot("plotly_graph", plotlyObject)
        };

      }
      catch(e){
        // graph failed
        console.error(e)
        
        handleSave();
        onAIResponseComplete();
      }
    }
  }, [ready]);

  if(!ready){
    return(       
      <div className="pad-sm loading" style={{fontSize:'1.25rem'}}>
        <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
               wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
               wrapperClass="blocks-wrapper loading" visible={true}
             />
      </div> 
    )
  }

  if(ready && !success){
    if(showInfoMsg){
      return(
        <div>
          <div className="pad-sm" style={{color:'red', fontSize: '1.25rem', maxWidth:'600px'}}>{errorMsg}</div> 
          <ul className="pad-sm" style={{listStyleType: 'disc', fontSize: '1.125rem'}}>
          <br/>
            Some functions can't have their integral calculated depending on the x value:
            <li style={{marginLeft:'1rem'}}>log(x) at zero or a negative number is undefined</li>
            <li style={{marginLeft:'1rem'}}>tan(x) at about -1.5708 and 1.5708 is undefined</li>
            <li style={{marginLeft:'1rem'}}>Any function that has zero in the denominator is undefined because you can't 
            divide by zero</li>
          </ul> 
        </div>
      ) 
    }
    else{
      return <div className="pad-sm" style={{color:'red', fontSize: '1.25rem', maxWidth:'600px'}}>{errorMsg}</div> 
    }
  }

  return (
    <div className="plotly-graph-div graph-frame" id="plotly_graph"></div> 
  )

}

export default IntCustomGraph
