import { useEffect } from "react";
import faqimg from "../../../assets/images/faqimg/faq.svg";
import faqcss from "./Faq.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={faqcss.grdcolor}>
      <div className="lg:flex lg:flex-row ml-12 mr-12 mt-24">
        <div className="lg:w-1/2 ">
          <div data-aos="zoom-in-up">
            <img src={faqimg} height={"100px"} width={"100px"} />
          </div>
          <p className="text-2xl font-semibold">
            Frequently asked questions_?
            <span className="text-purple-600"> That you need to know.</span>
          </p>
          <p>
            We have answered some of your common questions here.Before we
            question who once did this list and asked never. Then you don't have
            to wait for our answer and your precious time will survive.
          </p>
        </div>
        {/*  FAQ part two  */}
        <div className="lg:w-1/2 overflow-auto p-4 mx-16  h-96 text-justify ">
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              What do you need to konw in basic to do the course?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Basic html,css,Git/GitHub should have ideas and experience
                working on VSCode Editor.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              When will the first class of the course start ?
            </div>
            <div className="collapse-content">
              <p>The Cousre Start from 1 Dec 2023.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How to give the course videos?
            </div>
            <div className="collapse-content">
              <p>
                The video of the course will be recorded from the past. You can
                see all the videos, such as, by login.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              How much is the Course Fee?
            </div>
            <div className="collapse-content">
              <p>
                Course Fee is,1100 Taka ( One thousand one hundred Taka only )
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Is the course fee refundable?
            </div>
            <div className="collapse-content">
              <p>
                Within a maximum of 7 days of enrollment you can recover course
                fees by making appropriate reasons from our website. You will
                lose all the access to the course after your course refund
                request is successful and no longer be able to login to our
                platform.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              How to pay the Course fee?
            </div>
            <div className="collapse-content">
              <p>Pay With Bkash: 01300280287</p>
            </div>
          </div>
          <div className="collapse collapse-arrow hover:bg-purple-600  hover:text-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              The answer to my question is not here.Where to question?
            </div>
            <div className="collapse-content">
              <p>
                If you have a detailed question, you can reach out to us through
                our Facebook page by sending a private message or posting it in
                our public groups. Additionally, our support center is available
                at +8801300280287, and our hours of operation are from 10:00
                a.m. to 10:00 p.m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
