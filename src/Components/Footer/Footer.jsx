import React from "react";
import { DiGithubBadge } from "react-icons/di";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { BsTelegram, BsTelephoneForward } from "react-icons/Bs";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">About Us</header>
          <p className="w-56 text-justify ">
            Let'sLearn: Leading edutech platform for software dev, offering web
            & mobile courses, emphasizing R&D, teaching, and community
            leadership.
          </p>
        </nav>
        <nav>
          <header className="footer-title">Get In Touch</header>
          <div className="flex flex-row gap-2">
            <div>
              <CiLocationOn className="w-5 h-5" />
            </div>
            <div>
              <a>Level-20,44,Mirpur 2,Dhaka,Bangladesh </a>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <AiOutlineMail className="w-5 h-5" />
            </div>
            <div>
              <a>chakrabortyshuva216@gmail.com </a>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <BsTelephoneForward className="w-5 h-5" />
            </div>
            <div>
              <a>Helpline:01300280287 </a>
            </div>
          </div>

          <div>
            <a>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Follow Us</header>
          <div className="flex flex-row gap-4">
            <div>
              <a
                href="https://github.com/Shuvapandit?tab=repositories"
                target="_blank"
              >
                <DiGithubBadge className="w-7 h-7" />
              </a>
            </div>
            <div>
              <a href="https://discord.gg/EpRx3G6e" target="_blank">
                <FaDiscord className="w-7 h-7" />
              </a>
            </div>
            <div>
              <a href="https://web.telegram.org/a/" target="_blank">
                <BsTelegram className="w-7 h-7" />
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=01872451678&text=Hello this is the starting message"
                target="_blank"
              >
                <AiOutlineWhatsApp className="w-7 h-7" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/shuva-chakraborty-7aa59818a/"
                target="_blank"
              >
                <AiFillLinkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <p>Copyright ©2023 Shuva Chakraborty। All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Footer;
