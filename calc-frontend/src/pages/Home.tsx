import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router"
import { useAuth } from "../App/AuthContext";
import SignInButton from "../components/ui/SignInButton";
import SignOutButton from "../components/ui/SignOutButton";



function Home() {
  const { session, isPending } = useAuth();


    const d1 = useRef(null);
    const d2 = useRef(null);
    const d3 = useRef(null);
    const d4 = useRef(null);
    const d5 = useRef(null);
    const d6 = useRef(null);
    const d7 = useRef(null);   
    const d8 = useRef(null); 
    const d9 = useRef(null); 
    const d10 = useRef(null);
    const d11 = useRef(null);
    const d12 = useRef(null);
    const d13 = useRef(null);
    const d14 = useRef(null);
    const d15 = useRef(null);
    const d16 = useRef(null);
    const d17 = useRef(null);
    const d18 = useRef(null);
    const d19 = useRef(null);
    const d20 = useRef(null);
    const d21 = useRef(null);
    const d22 = useRef(null);
    const d23 = useRef(null);
    const d24 = useRef(null);
    const d25 = useRef(null);
  
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
      MQ.StaticMath(d10.current, { })
      MQ.StaticMath(d11.current, { })
      MQ.StaticMath(d12.current, { })
      MQ.StaticMath(d13.current, { })
      MQ.StaticMath(d14.current, { })
      MQ.StaticMath(d15.current, { })
      MQ.StaticMath(d16.current, { })
      MQ.StaticMath(d17.current, { })
      MQ.StaticMath(d18.current, { })
      MQ.StaticMath(d19.current, { })
      MQ.StaticMath(d20.current, { })
      MQ.StaticMath(d21.current, { })
      MQ.StaticMath(d22.current, { })
      MQ.StaticMath(d23.current, { })
      MQ.StaticMath(d24.current, { })
      MQ.StaticMath(d25.current, { })

  
    }, []);

  return (
    <div>
      <Link to="/dashboard" tabIndex={-1} style={{marginRight:'20px'}}>
        <button className="back-button">Dashboard</button>
      </Link>
      {isPending === true? 
        null
        : 
        !session ? <SignInButton/> : <SignOutButton/> }

      <h2 className = "topic-header m-auto w-fit">Topics</h2>

      <div className="flex flex-col m-auto home-list">

        <h3 className = "topic-header m-auto w-fit">More topics coming soon...</h3>
        
      </div>
      <h2 className = "ig-p .side-text topic-header m-auto w-fit">Topics</h2>

      <div className="flex flex-col gap-6 m-auto home-list">
        
      {/*Unit Circle*/}
    <div className="bg-white border-2 border-balck-solid rounded-lg shadow-md">
  
  <img alt="Limit illustration"
    className="w-full h-50 object-cover" 
    height="400" 
    src=""//Image for Integrals goes here
    width="400"/>

  <div className="p-4">
   <h2 className="text-lg font-semibold">
    
   </h2>
   <div className="flex items-center mt-2">
    <span className=".big-p .side-text bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
     Calc 1 Topic
    </span>
    <i className="fas fa-fire text-yellow-500 ml-2">
    </i>
   </div>
   <div className="mt-2 flex flex-wrap gap-2">
      <Link to="/derivatives/linear" className = "link-box2">
              <div className="link-title2"><span ref={d18} style={{ cursor: 'pointer' }}> x </span>
              </div>
          </Link>

        <Link to="/derivatives/quadratic" className = "link-box2">
              <div className="link-title2"><span ref={d19} style={{ cursor: 'pointer' }}>x^{2}</span>
              </div>
          </Link>

        <Link to="/derivatives/exponential" className = "link-box2">
              <div className="link-title2"> <span ref={d20} style={{ cursor: 'pointer' }}>{"e^{x}"}</span>{/*Expnential*/}
              </div>
          </Link>

        <Link to="/derivatives/logarithmic" className = "link-box2">
              <div className="link-title2"><span ref={d21} style={{ cursor: 'pointer' }}>ln(x)</span>{/*Log*/}
              </div>
          </Link>

        <Link to="/derivatives/sine" className = "link-box2">
              <div className="link-title2"><span ref={d22} style={{ cursor: 'pointer' }}>sin(x)</span>{/*Sine*/}
              </div>
          </Link>

          <Link to="/derivatives/cosine" className = "link-box2">
              <div className="link-title2"><span ref={d23} style={{ cursor: 'pointer' }}>cos(x)</span>{/*Cos*/}
              </div>
          </Link>

          <Link to="/derivatives/tangent" className = "link-box2">
              <div className="link-title2"><span ref={d24} style={{ cursor: 'pointer' }}>tan(x)</span>{/*Tan*/}
              </div>
          </Link>

          <Link to="/derivatives/custom" className = "link-box2">
              <div className="link-title2"><span ref={d25} style={{ cursor: 'pointer' }}>custom</span>{/*Custom*/}
              </div>
          </Link>

    <i className="fas fa-fire text-yellow-500 ml-2">
    </i>
   </div>
   <div className="mt-2 flex flex-wrap gap-2">
    <span className=".big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
    WP: The unit circle is a circle of radius 1 centered at the origin of the coordinate plane, and it is used to define trigonometric functions such as sine, cosine, and tangent.
    </span>
   </div>
  </div>
 </div> 
{/*Derivatives*/}
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
        <Link to="/derivatives/linear" className = "link-box2">
              <div className="link-title2"><span ref={d1} style={{ cursor: 'pointer' }}> x </span>
              </div>
          </Link>

        <Link to="/derivatives/quadratic" className = "link-box2">
              <div className="link-title2"><span ref={d2} style={{ cursor: 'pointer' }}>x^{2}</span>
              </div>
          </Link>

        <Link to="/derivatives/exponential" className = "link-box2">
              <div className="link-title2"> <span ref={d4} style={{ cursor: 'pointer' }}>{"e^{x}"}</span>{/*Expnential*/}
              </div>
          </Link>

        <Link to="/derivatives/logarithmic" className = "link-box2">
              <div className="link-title2"><span ref={d5} style={{ cursor: 'pointer' }}>ln(x)</span>{/*Log*/}
              </div>
          </Link>

        <Link to="/derivatives/sine" className = "link-box2">
              <div className="link-title2"><span ref={d6} style={{ cursor: 'pointer' }}>sin(x)</span>{/*Sine*/}
              </div>
          </Link>

          <Link to="/derivatives/cosine" className = "link-box2">
              <div className="link-title2"><span ref={d7} style={{ cursor: 'pointer' }}>cos(x)</span>{/*Cos*/}
              </div>
          </Link>

          <Link to="/derivatives/tangent" className = "link-box2">
              <div className="link-title2"><span ref={d8} style={{ cursor: 'pointer' }}>tan(x)</span>{/*Tan*/}
              </div>
          </Link>

          <Link to="/derivatives/custom" className = "link-box2">
              <div className="link-title2"><span ref={d9} style={{ cursor: 'pointer' }}>custom</span>{/*Custom*/}
              </div>
          </Link>
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
  
    <img alt="Integrals illustration"
      className="w-full h-50 object-cover" 
      height="400" 
      src=""//Image for Integrals goes here
      width="400"/>

    <div className="p-4">
     <h2 className="text-lg font-semibold">
      
     </h2>
     <div className="flex items-center mt-2">
      <span className=".big-p .side-text bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
       Calc 1 Topic
      </span>
      <i className="fas fa-fire text-yellow-500 ml-2">
      </i>
     </div>
     <div className="mt-2 flex flex-wrap gap-2">
        <Link to="/integrals/linear" className = "link-box2">
              <div className="link-title2"><span ref={d10} style={{ cursor: 'pointer' }}> x </span>
              </div>
          </Link>

        <Link to="/integrals/quadratic" className = "link-box2">
              <div className="link-title2"><span ref={d11} style={{ cursor: 'pointer' }}>x^{2}</span>
              </div>
          </Link>

        <Link to="/integrals/exponential" className = "link-box2">
              <div className="link-title2"> <span ref={d12} style={{ cursor: 'pointer' }}>{"e^{x}"}</span>{/*Expnential*/}
              </div>
          </Link>

        <Link to="/integrals/logarithmic" className = "link-box2">
              <div className="link-title2"><span ref={d13} style={{ cursor: 'pointer' }}>ln(x)</span>{/*Log*/}
              </div>
          </Link>

        <Link to="/integrals/sine" className = "link-box2">
              <div className="link-title2"><span ref={d14} style={{ cursor: 'pointer' }}>sin(x)</span>{/*Sine*/}
              </div>
          </Link>

          <Link to="/integrals/cosine" className = "link-box2">
              <div className="link-title2"><span ref={d15} style={{ cursor: 'pointer' }}>cos(x)</span>{/*Cos*/}
              </div>
          </Link>

          <Link to="/integrals/tangent" className = "link-box2">
              <div className="link-title2"><span ref={d16} style={{ cursor: 'pointer' }}>tan(x)</span>{/*Tan*/}
              </div>
          </Link>

          <Link to="/integrals/custom" className = "link-box2">
              <div className="link-title2"><span ref={d17} style={{ cursor: 'pointer' }}>custom</span>{/*Custom*/}
              </div>
          </Link>
      <i className="fas fa-fire text-yellow-500 ml-2">
      </i>
     </div>
     <div className="mt-2 flex flex-wrap gap-2">
      <span className=".big-p .side-text bg-gray-200 text-black-700 text-xs font-semibold px-2 py-1 rounded">
      WP: An integral is a mathematical object that represents the signed area under a curve, and it is used to calculate quantities such as area, volume, and displacement.
      </span>
     </div>
    </div>
   </div> 
 </div>
</div>
          
        
      
      
    
  )
};

export default Home
