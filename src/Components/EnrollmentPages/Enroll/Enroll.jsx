import React from "react";
import {
  TbArrowNarrowRight,
  TbNumber0,
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
  TbNumber9,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Enroll = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center text-purple-600 mt-3">
        Instructions
      </p>
      <p className=" font-semibold text-center  mt-1">
        Please read the following guideline well before enrolling the course
      </p>
      <div>
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber1 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              The course is a other-demand, video onli and limited support
              course। You can purchase the course at any time and learn to watch
              videos by studying self-by-step self-governing।
            </h4>
          </VerticalTimelineElement>
          {/*  2 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber2 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              If you do the course you are not getting any certificate.The
              course will only help you understand React very well and overall
              your JavaScript and html,css concept will do better.Just receiving
              the certificate is not for you if you have the purpose.If learning
              is your main purpose, you can move forward.
            </h4>
          </VerticalTimelineElement>
          {/*  3 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber3 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              No support committee with the course. It's a video ony,
              self-passed course.But if you get stuck somewhere you can post in
              our Discord Private Community and community members will try to
              cooperate according to their time। However, there is no support
              committee.
            </h4>
          </VerticalTimelineElement>
          {/*  4 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber4 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Before enrolling in the course, please gather all the necessary
              information from our website. If you have any questions, you can
              also reach out through our Facebook page, group, or contact our
              support center directly. You can find all the contact information
              in the 'Contact' section of the website, where there is a link
              provided.
            </h4>
          </VerticalTimelineElement>
          {/*  5 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber5 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              This course is exclusively designed for beginners. To ensure that
              you meet the prerequisites for this course, please review the
              requirements provided here. Additionally, in the next step, you
              can assess your skills by completing some quizzes. If you find
              that you are not confident in passing the skill test, we strongly
              discourage you from purchasing the course.
            </h4>
          </VerticalTimelineElement>
          {/*  6 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber6 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              The scheduled course fee is 1,100 Taka, which is a one-time
              payment (One thousand one hundred Taka only). For individuals
              outside of Bangladesh who will use a mobile number from another
              country instead of a Bangladeshi mobile number, the course fee is
              1,200 rupees (One thousand two hundred rupees only). Please note
              that we do not offer any discounts as our course fee is already
              nominal. Unfortunately, we are unable to accommodate any special
              requests, and I sincerely apologize for any inconvenience this may
              cause.
            </h4>
          </VerticalTimelineElement>
          {/*  7 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber7 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              To ensure a successful course engagement, we kindly request that
              you provide all the necessary personal information as outlined in
              step number three.
            </h4>
          </VerticalTimelineElement>
          {/*  8 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber8 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Course fee You can pay through the payment channel of your choice.
              That's why follow the payment instructions in step number four.
            </h4>
          </VerticalTimelineElement>
          {/*  9 */}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(75, 0, 130)", color: "#fff" }}
            icon={<TbNumber9 />}
            contentStyle={{
              background: "none",
              boxShadow: "none",
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              At our support center, you can contact us if you faces any
              technical errors related to the course fee.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <div className="mt-12 mr-32 ml-32 ">
          <ul className=" btn-neutral rounded-full px-4 py-2 text-center text-white">
            <Link to="/signup">
              <li>
                <a>
                  I would like to go to the next step in accordance with the
                  terms
                </a>{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
