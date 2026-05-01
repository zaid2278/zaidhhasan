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
                href="mailto:zaidhhasan@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                zaidhhasan@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:7135301534"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                (713) 530 1534
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BS Computer Science, New Jersey Institute of Technology — Expected May 2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/zaid2278"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/zaidhasan2278"
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
              Designed and Developed <br /> by <span>Zaid Hasan</span>
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
