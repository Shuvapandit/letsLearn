import { useEffect } from "react";
import img1 from "../../../assets/images/coursemoduleimg/courseMimg.svg";
import img2 from "../../../assets/Lottiefiles/courseModuleimg.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
} from "react-icons/tb";
import "./CourseModule.css";
const CourseModule = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-6">
      {/*  course Modules 1st part start */}
      <div
        className="flex justify-center items-center mb-5"
        data-aos="zoom-in-up"
      >
        <img src={img1} height={"100px"} width={"100px"} />
      </div>
      <p className="text-center text-3xl font-bold">
        How Will This Course <span className="text-purple-600">Modules </span>{" "}
        Work_?
      </p>
      <p className="text-center text-base font-semibold mt-2">
        Arranged in 12 modules The whole course
      </p>
      {/*  course Modules 1st part end*/}
      {/*  course Modules 2nd part start */}
      <div className="lg:flex lg:flex-row lg:mr-12 lg:ml-12 ml-5 mr-5 sm:mr-5 mb-5">
        <div className="lg:w-2/5  ">
          <div className=" mt-20  " data-aos="zoom-in-down">
            <Lottie className="h-96  lg:h-full sm:h-96" animationData={img2} />
          </div>
        </div>
        <div className="lg:w-3/5 w-full sm:w-full mt-10 ">
          <div className="  overflow-auto p-4 lg:mx-16 mx-2 sm:mx-2 h-96 text-justify ">
            <VerticalTimeline layout="1-column">
              <VerticalTimelineElement
                date="4+ Hour Video, 2 Assignments"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                /* icon={<i className="fas fa-briefcase">1</i>} */
                icon={<TbNumber1 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  First week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish the two modules and understand the basics of
                  html,css.
                </h4>
                <div className="lg:flex lg:flex-row gap-3 ">
                  <div className="mb-2">
                    <button className="btn  btn-sm text-purple-600 p-2">
                      Html,CSS FUNDAMENTALS
                    </button>
                  </div>
                  <div>
                    <button className="btn  btn-sm text-purple-600 p-2">
                      INTRODUCTION TO html,css
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="3+ Hour Video, 2 Assignments"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                /* icon={<i className="fas fa-briefcase">1</i>} */
                icon={<TbNumber2 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Second week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish two modules and do two projects using Psd to
                  html.
                </h4>
                <div className="lg:flex lg:flex-row gap-3 ">
                  <div className="mb-2">
                    <button className="btn  btn-sm text-purple-600 p-2">
                      PROJECT-SIMPLE TODO APP
                    </button>
                  </div>
                  <div>
                    <button className="btn  btn-sm text-purple-600 p-2">
                      PROJECT-Advance TODO APP
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="About 5 hours of video, 2 Assignments"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                icon={<TbNumber3 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Third week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish the two modules of javascript and find in
                  details and do a project.
                </h4>
                <div className=" ">
                  <div className="mb-2">
                    <button className="btn  btn-sm text-purple-600 p-2">
                      INTRODUCTION TO js
                    </button>
                  </div>
                  <div className="mb-3">
                    <button className="btn  btn-sm text-purple-600 p-2 pb-6">
                      PROJECT-VIDEO WEBSITE WITH html,css,js
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="About 5 hours of video, 2  Assignments"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                icon={<TbNumber4 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Fourth week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish the two modules and do another project with the
                  html,css,js. At that time we will update the project with a
                  preliminary idea of React js.
                </h4>
                <div className=" ">
                  <div className="mb-2">
                    <button className="btn  btn-sm text-purple-600 p-2">
                      INTRODUCTION TO React js
                    </button>
                  </div>
                  <div className="mb-3">
                    <button className="btn  btn-sm text-purple-600 p-2 pb-6">
                      PROJECT-BLOG WEBSITE WITH html,css,js
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="About 6 + hour video, 1 Assignments"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                icon={<TbNumber5 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Fifth week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish the two modules and do project with the React
                  js and do two projects using React js.
                </h4>

                <div className="mb-3">
                  <button className="btn  btn-sm text-purple-600 p-2 pb-6">
                    PROJECT- E-commarce WEBSITE WITH React js
                  </button>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="About 4 hours of video and final test"
                iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
                /* icon={<i className="fas fa-briefcase">1</i>} */
                icon={<TbNumber6 />}
                contentStyle={{
                  background: "none",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }} // Add large box shadow
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Sixth week
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  We will finish the two modules and know about the firebase
                  documentation.And will discuss some common job interview
                  questions as well।
                </h4>

                <div className="mb-2">
                  <button className="btn  btn-sm text-purple-600 p-2">
                    PROJECT-Complete E-commarce Website
                  </button>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
      {/*  course Modules 2nd part end */}
    </div>
  );
};

export default CourseModule;
