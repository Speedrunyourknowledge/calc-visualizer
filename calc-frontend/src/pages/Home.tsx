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
        !session ? <SignInButton/> : <SignOutButton/> 
      }

      <div className="flex flex-col gap-[20px] m-auto home-list mb-4 mt-2">
              
        <img alt="Derivative Illustration"
              className="object-cover" 
              height="200" 
              src="" 
              width="200"
          />

        <div className="bg-white border-2 border-black-solid rounded-lg shadow-md w-fit">

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">
              Derivatives
            </h2>

            <div className="flex items-center mb-3">
              <span className="big-p bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Calculus 1
              </span>
              <i className="fas fa-fire text-yellow-500 ml-2"></i>
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
              <i className="fas fa-fire text-yellow-500 ml-2"></i>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="big-p side-text bg-gray-200 text-black-700 font-medium px-2 py-1 rounded">
              WP: A derivative measures the instantaneous rate of change of a function, 
              essentially telling you how much a function's output changes for an infinitely small change in its input
              </span>
            </div>
          
          </div>
        </div>



        <img alt="Integral illustration"
              className="object-cover" 
              height="200" 
              src=""//Image for Integrals goes here
              width="200"
          />

        <div className="bg-white border-2 border-black-solid rounded-lg shadow-md w-fit">
        
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">
              Integrals
            </h2>
            <div className="flex items-center mb-3">
              <span className="big-p bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Calculus 1
              </span>
              <i className="fas fa-fire text-yellow-500 ml-2"></i>
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
              <i className="fas fa-fire text-yellow-500 ml-2"></i>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="big-p side-text bg-gray-200 text-black-700 font-medium px-2 py-1 rounded">
              WP: An integral is a mathematical object that represents the signed area under a curve, 
              and it is used to calculate quantities such as area, volume, and displacement
              </span>
            </div>

          </div>
        </div> 

      </div>
    </div>
  )
};

export default Home
