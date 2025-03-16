// @ts-nocheck

import { useLayoutEffect , useEffect, useState} from "react";
import axios from "axios";

function IntCustomGraph({func, lowerBound, upperBound}) {

  const [ready, setReady] = useState(false)
  const [success, setSuccess] = useState(false)
  const [plotlyObject, setPlotlyObject] = useState(null)

  useEffect(() => {

    const serverUrl = 'http://localhost:3000/api/'

    let request = axios.post(serverUrl + 'graph/create-graph',
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
        console.log('Unable to connect to server')
      }
      if(e.status === 422){
        console.log(e)
        console.log('Your function could not be graphed. \
          Make sure the function is properly formatted and check if the bounds \
          are within the function\'s domain')
      }
      else{
        console.log(e)
        console.log('server returned a bad response')
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


  return (
    
    ready? 
      success? <div className="plotly-graph-div graph-frame" id="plotly_graph"></div> :
      <div>graph failed</div> 
    :
    <div>
      loading...
    </div> 
  )

}

export default IntCustomGraph
