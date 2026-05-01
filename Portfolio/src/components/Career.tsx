import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>RDE Systems</h5>
              </div>
              <h3>Jan 2026 - Present</h3>
            </div>
            <p>
              Developing a secure Medical Management Web Application to streamline patient-doctor interactions, utilizing ColdFusion, MS SQL, HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IST Service Desk Student Assistant</h4>
                <h5>NJIT Digital Learning and Campus Support</h5>
              </div>
              <h3>Jan 2024 - Present</h3>
            </div>
            <p>
              Collaborate closely with full-time staff to optimize operations at the Information Services & Technology Desk, ensuring expedited resolution of user needs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>USA Dental Solutions</h5>
              </div>
              <h3>Jun 2023 - Sep 2023</h3>
            </div>
            <p>
              Contributed to the DentTracks SaaS platform by developing APIs to aggregate patient data into centralized databases, ensuring seamless synchronization and HIPAA compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
