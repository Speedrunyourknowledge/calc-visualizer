// @ts-nocheck

import { useLayoutEffect , useEffect, useState} from "react";
import axios from "axios";

function IntCustomGraph({func, lowerBound, upperBound}) {

  const [ready, setReady] = useState(false)
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
    console.log(func)

    request.then(response => {
      if(response.status === 200){
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
      
        setReady(true)
        setPlotlyObject(graphObject)
      }
      else{
        console.log('The function could not be graphed. Make sure the function \
          is defined for all x-values within your bounds.')
      }
    })
    .catch(function(error) {

      if(error.response === undefined){
        console.log('Unable to connect to server')
        console.log(error)
      }
      else{
        console.log('A server error occured')
      }
    })

  },[])

  useLayoutEffect(() => {
    if(ready){
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
      <div className="plotly-graph-div graph-frame" id="plotly_graph">
      </div>
  )

}

export default IntCustomGraph
