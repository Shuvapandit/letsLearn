import React, { useEffect } from "react";
import prereqimg from "../../../assets/images/prereqimg/Prerequisite.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import html5 from "../../../assets/images/prereqimg/html-5.png";
import css from "../../../assets/images/prereqimg/css-3.png";
import js from "../../../assets/images/prereqimg/js.png";
import react from "../../../assets/images/prereqimg/react.png";
import github from "../../../assets/images/prereqimg/github.png";
import vscode from "../../../assets/images/prereqimg/vscode.png";
import link from "../../../assets/images/prereqimg/link.png";
const Prerequisites = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-12 mb-12 lg:mr-12 lg:ml-12">
      <div className="lg:flex lg:flrx-row">
        <div className="lg:w-2/5 w-full sm:w-full mt-20  ">
          <div className="mb-3" data-aos="zoom-in-up">
            <img src={prereqimg} height={"100px"} width={"100px"} />
          </div>
          <p className="text-2xl font-semibold">
            To do courses{" "}
            <span className="text-purple-600">Which needs to be known_?</span>
          </p>

          <p className="mt-3">
            This course is not entirely for Biginers। You need to have an idea
            of the issues mentioned in order to do the course। You know the
            issues will take over this course। If not known, you can learn from
            the reckomed link।
          </p>
        </div>
        {/*  part 2 */}
        <div className="lg:w-3/5 w-full sm:w-full lg:ml-4 ">
          <div className="lg:grid lg:grid-cols-3 gap-x-5 gap-y-6 ">
            {/*  1 */}
            <div className="card lg:w-60 w-full sm:w-full  bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={html5} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">Basic HTML</p>
                <p>There must be a preliminary idea about HTML.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a href="https://www.w3schools.com/html/" target="_blank">
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
            {/*  2 */}
            <div className="card lg:w-60 w-full sm:w-full   bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={css} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">Basic CSS</p>
                <p>There must be a preliminary idea about CSS.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a
                      href="https://www.w3schools.com/css/default.asp"
                      target="_blank"
                    >
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
            {/*  3 */}
            <div className="card lg:w-60 w-full sm:w-full   bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={js} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">Basic Js</p>
                <p>There must be an idea about basic and modern JavaScript.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a
                      href="https://youtu.be/PkZNo7MFNFg?si=jiJkochQQOmVJ-u5"
                      target="_blank"
                    >
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
            {/*  4 */}
            <div className="card lg:w-60 w-full sm:w-full   bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={react} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">React Js</p>
                <p>There must be a preliminary idea about React.js.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a
                      href="https://www.youtube.com/watch?v=5Xy-t8k_M4A&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr"
                      target="_blank"
                    >
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
            {/*  5 */}
            <div className="card lg:w-60 w-full sm:w-full   bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={github} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">Basic Git/GitHub</p>
                <p>There must be a preliminary idea about Git/GitHub.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a
                      href="https://www.youtube.com/watch?v=RGOj5yH7evk"
                      target="_blank"
                    >
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
            {/*  6 */}
            <div className="card lg:w-60 w-full sm:w-full   bg-base-100 shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
              <figure className="px-10 pt-10">
                <img src={vscode} alt="card" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" font-semibold">VS Code Editor</p>
                <p>The VS Code editor must have a habit of working.</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-outline text-sm font-light ">
                    <a
                      href="https://www.youtube.com/watch?v=VqCgcpAypFQ"
                      target="_blank"
                    >
                      <img className="h-4 w-4" src={link} />
                    </a>
                    Learn from here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prerequisites;
