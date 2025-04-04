import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router"

function Home() {

    const d1 = useRef(null);
    const d2 = useRef(null);
    const d3 = useRef(null);
    const d4 = useRef(null);
    const d5 = useRef(null);
    const d6 = useRef(null);
    const d7 = useRef(null);   
    const d8 = useRef(null); 
    const d9 = useRef(null); 
  
    useLayoutEffect(() =>{
      //@ts-ignore
      let MQ = MathQuill.getInterface(2);
      MQ.StaticMath(d1.current, { })
      MQ.StaticMath(d2.current, { })
      MQ.StaticMath(d3.current, { })
      MQ.StaticMath(d4.current, { })
      MQ.StaticMath(d5.current, { })
      MQ.StaticMath(d6.current, { })
      MQ.StaticMath(d7.current, { })
      MQ.StaticMath(d8.current, { })
      MQ.StaticMath(d9.current, { })

  
    }, []);

  return (
    <div>
      <h2 className = "topic-header m-auto w-fit">Topics</h2>

      <div className="flex flex-col gap-6 m-auto home-list">
        {
          /*
          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
          */
        }
        
{/*Fortnite*/}
   <div className="bg-white border-2 border-balck-solid rounded-lg shadow-md">
  
    <img alt="Fortnite illustration"
      className="w-full h-100 object-cover" 
      height="400" 
      src="https://images.immediate.co.uk/production/volatile/sites/3/2021/03/Fortnite-Zero-crisis-finale-e16729a.jpg?quality=90&resize=620,414" 
      width="400"/>

    <div className="p-4">
     <h2 className="text-lg font-semibold">
      Derivatives
     </h2>

     <div className="flex items-center mt-2">
      <span className=".big-p .side-text bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
       Calc 1 Topic
      </span>
      <i className="fas fa-fire text-yellow-500 ml-2">
      </i>
     </div>
     <div className="mt-2 flex flex-wrap gap-2">
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d1}> x </span> {/*Linear*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d2}>x^{2}</span>{/*Quad*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d3}>x^{3}</span>{/*Cubic*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d4}>{"e^{x}"}</span>{/*Expnential*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d5}>ln(x)</span>{/*Log*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d6}>cos(x)</span>{/*Sine*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d7}>sin(x)</span>{/*Cos*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d8}>tan(x)</span>{/*Tan*/}
      </span>
      <span className="bg-gray-200 text-gray-700 font-semibold px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
      <span ref={d9}>custom</span>{/*Tan*/}
      </span>
      <i className="fas fa-fire text-yellow-500 ml-2">
      </i>
     </div>
     <div className="mt-2 flex flex-wrap gap-2">
      <span className=".big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
      WP: A derivative measures the instantaneous rate of change of a function, essentially telling you how much a function's output changes for an infinitesimally small change in its input
      </span>
     </div>
    </div>
   </div>

   {/*Integrals*/}
   <div className="bg-white border-2 border-balck-solid rounded-lg shadow-md">
   <div className="flex justify-center">
    <img 
    alt="Integral illustration"
    className="object-cover"
    height="150" 
    width="200"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Integral_example.svg/600px-Integral_example.svg.png" 
   />
</div>
  <div className="p-4 mt-2 flex flex-wrap gap-2">
   <h2 className=".big-p .side-text bg-gray-100 text-black-700 text-xs font-semibold px-2 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
  Integrals
   </h2>

   <div className="flex items-center mt-2">
   
    <i className="fas fa-fire text-yellow-500 ml-2">
    </i>
   </div>
   <div className="mt-2 flex flex-wrap gap-2">
    <span className=".big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
    WP: Integrals are the continuous analog of a sum, which is used to calculate areas, volumes, and their generalizations.
    </span>
    <span className="bg-gray-300 px-5 py-1 rounded border-2 border-balck-solid rounded-lg shadow-md">
       Linear
      </span>
   </div>
  </div>
 </div>


 {/*Integrals v2*/}
   <div className=" @apply h-50 flex w-full items-center justify-center 
    bg-amber-300 rounded-lg hover:bg-amber-400 transition transform hover:scale-103 
    duration-200 border-2 border-solid; bg-white border border-black-999 rounded-lg shadow-md">
   <div className="flex justify-center">
    <img 
    alt="Integral illustration"
    className="object-cover"
    height="150" 
    width="200"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Integral_example.svg/600px-Integral_example.svg.png" 
   />
</div>
  <div className="p-4">
   <h2 className="text-lg font-semibold">
   <Link to="/integrals" className = "link-box">
              <div className="link-title">Integrals</div>
          </Link>
   </h2>

   <div className="flex items-center mt-2">
    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
     Calc 1 Topic
     
    </span>
    <i className="fas fa-fire text-yellow-500 ml-2">
    </i>
   </div>
   <div className="mt-2 flex flex-wrap gap-2">
    <span className=".big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
    WIP: Integrals are the continuous analog of a sum, which is used to calculate areas, volumes, and their generalizations.
    </span>
   </div>
  </div>
 </div>

    {/*Unit Circle*/}
        <div className="bg-white p-4 shadow-md">
    <img alt="Intergral visualization" 
    height="150" 
    src="https://cdn-academy.pressidium.com/academy/wp-content/uploads/2021/03/Unit-circle.png" 
    width="200"/>
    
    
    <div className="mt-2 flex flex-wrap gap-2"></div>
     <h2 className="text-lg font-semibold">
      Unit Circle
     </h2>
    <span className="big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
    WIP: Unit Circle is a circle
      </span>
      
    <div className="mt-2">
     
     <div className="mt-2">

     </div>
    </div>
   </div>
        
          <Link to="/derivatives" className = "link-box">
              <div className="link-title">Derivatives</div>
          </Link>
          
          <Link to="/integrals" className = "link-box">
              <div className="link-title">Integrals</div>
          </Link>

          <Link to="/unit-circle" className = "link-box">
              <div className="link-title">Unit Circle</div>
          </Link>
          
          <h3 className = "topic-header m-auto w-fit">More topics coming soon...</h3>
        
      </div>
      
    </div>
  )
};

export default Home
