// @ts-nocheck

import { useLayoutEffect , useEffect, useState} from "react";
import axios from "axios";

function IntCustomGraph({func, lowerBound, upperBound}) {

  const [ready, setReady] = useState(false)
  const [success, setSuccess] = useState(false)
  const [plotlyObject, setPlotlyObject] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {

    const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

    let request = axios.post(serverUrl + '/graph/create-graph',
      {
        'func': func,
        'lowerBound': lowerBound,
        'upperBound': upperBound

      }
      // { withCredentials:true}
    )

    // add loading circle when ready is false
    setReady(false)
    setSuccess(false)

    request.then(response => {
      console.log(response)
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
      }
      else if(e.status === 422){
        setErrorMsg('Your function could not be graphed. \
          Make sure the function is properly formatted or try a \
          different function')
      }
      else{
        console.log(e)
        setErrorMsg('Your function could not be graphed. \
          Make sure the function is properly formatted or try a \
          different function')
      }
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
        console.log(e)
      }
    }
  }, [ready]);

  if(!ready){
    return(       
      <div className="pad-sm loading" style={{fontSize:'1.25rem'}}>
        Loading...<br/>
        Complex functions may take longer
      </div> 
    )
  }

  if(ready && !success){
    return <div className="pad-sm" style={{color:'red', fontSize: '1.25rem'}}>{errorMsg}</div> 
  }

  return (
    <div className="plotly-graph-div graph-frame" id="plotly_graph"></div> 
  )

}

export default IntCustomGraph
