import React, { useEffect } from "react";
import img1 from "../../assets/images/coursefeatimg/cfimg1.svg"
import img2 from "../../assets/images/coursefeatimg/video.png";
import img3 from "../../assets/images/coursefeatimg/digitalization.png";
import img4 from "../../assets/images/coursefeatimg/choose.png";
import img5 from "../../assets/images/coursefeatimg/web-development.png";
import img6 from "../../assets/images/coursefeatimg/networking.png";
import img7 from "../../assets/images/coursefeatimg/project-management.png";
import AOS from "aos";
import "aos/dist/aos.css";
const CourseFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-6">
      <div
        className="flex justify-center items-center mb-5"
        data-aos="zoom-in-up"
      >
        <img src={img1} height={"100px"} width={"100px"} />
      </div>
      <p className="text-center text-3xl font-bold">
        Our <span className="text-purple-600">React js</span> course at a glance
      </p>
      <p className="text-center text-base font-semibold mt-2">
        What is being on this course
      </p>
      {/* box start */}
      <div className="lg:mr-16 lg:ml-16 ml-5 mr-5 sm:mr-5 p-12 mt-5 border shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <div className="grid lg:grid-cols-3 place-items-center mt-4  ">
          {/*grid 1 start */}
          <div className="lg:border-r border-b p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img2} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">
              135 + Video in 12 modules
            </p>
            <p className="text-center">
              The course is structured with 12 modules and 135+ videos,
              facilitating a step-by-step learning approach for comprehensive
              understanding.
            </p>
          </div>
          {/* grid  1 end */}
          {/* grid 2 start */}
          <div className="lg:border-r border-b p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img3} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">
              36 hours 20GB of rated content
            </p>
            <p className="text-center">
              Video dimensions and quality are optimized, considering time and
              bandwidth constraints to minimize costs while maintaining
              effectiveness.
            </p>
          </div>
          {/* grid  2 end */}
          {/* grid  3 start */}
          <div className=" border-b p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img4} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">120 + T quiz</p>
            <p className="text-center">
              End-of-video quizzes, along with answers and explanations, allow
              instant progress validation within the learning journey, enhancing
              comprehension and retention.
            </p>
          </div>
          {/*  grid 3 end */}
          {/* grid 4 start */}
          <div className="lg:border-r border-b sm:border-b lg:border-b-0 p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img5} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">10 esinments</p>
            <p className="text-center">
              At the conclusion of each module, self-assigned tasks provide
              hands-on experience and practical learning. Solutions are readily
              available on GitHub for reference.
            </p>
          </div>
          {/*  grid 4 end */}
          {/* grid 5 start */}
          <div className="lg:border-r  border-b sm:border-b lg:border-b-0 p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img6} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">
              5 recorded sessions
            </p>
            <p className="text-center">
              Collaborative revision sessions emphasize key assignment topics,
              nurturing shared learning and problem-solving among all
              participants for improved understanding.
            </p>
          </div>
          {/*  grid 5 end */}
          {/* grid 6 start */}
          <div className="  p-9 hover:scale-125 transition duration-500 cursor-pointer">
            <div className="flex justify-center items-center">
              <img src={img7} height={"50px"} width={"50px"} />
            </div>
            <p className="text-center text-base font-semibold">10 projects</p>
            <p className="text-center">
              This course highlights project-based learning with ten practical
              projects. Some are module-based demonstrations, while others
              involve hands-on implementation.
            </p>
          </div>
          {/*  grid 6 end */}
        </div>
      </div>
      {/* box end */}
    </div>
  );
};

export default CourseFeatures;
