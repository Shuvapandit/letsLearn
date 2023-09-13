import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import React, { useEffect, useState } from "react";
import homeimg from "../../assets/Lottiefiles/home.json";
import homecss from "./Home.module.css";
import AboutUs from "../../AboutUs/AboutUs";
import CourseFeatures from "../../CourseFeatures/CourseFeatures";
const Home = () => {
  return (
    <>
      <div>
        <div className={homecss.grd}>
          <div className="lg:flex lg:flex-row ">
            {/*   home text side start */}
            <div className=" lg:w-1/2  lg:mt-56 sm:mt-5 lg:ml-24  ">
              <div className={homecss.mfsmandmd}>
                <p className="text-5xl font-bold ">
                  Want to <span className="text-purple-600">learn</span>
                </p>
                {/* typewriter start */}
                <div className="font-semibold text-2xl ">
                  <Typewriter
                    options={{
                      strings: [
                        "Coding?",
                        "C++?",
                        "Javascript?",
                        "Developing?",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                {/* typewriter end */}

                <p className="lg:whitespace-nowrap font-medium">
                  We make programming simple & easy to understand.
                </p>
                <div className="mt-3">
                  {" "}
                  <button className="btn  btn-primary  sm:btn-sm md:btn-md lg:btn-md ">
                    See More..
                  </button>
                </div>
              </div>
            </div>
            {/*   home text side end */}
            {/*   home image side start */}
            <div className="lg:w-1/2  ">
              <div className="  lg:ml-34 ">
                <Lottie className="h-96 lg:h-full sm:h-96" animationData={homeimg} />
              </div>
            </div>
            {/*   home image side start */}
          </div>
        </div>

       <CourseFeatures/>
      </div>
    </>
  );
};

export default Home;
