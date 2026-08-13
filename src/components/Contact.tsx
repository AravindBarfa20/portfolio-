import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:aravind2425@gmail.com"
                data-cursor="disable"
              >
                aravind2425@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/aravindbarfa20/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — aravindbarfa20
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E., Atria Institute of Technology, Bengaluru — 2023–2027
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AravindBarfa20"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aravindbarfa20/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Adapted and built <br />by <span>Aravind T</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
