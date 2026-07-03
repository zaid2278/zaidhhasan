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
                <h4>Software Developer Intern</h4>
                <h5>DentTracks</h5>
              </div>
              <h3>Jun 2026 - Present</h3>
            </div>
            <p>
              Architecting DentCommLayer, a real-time staff communication system with NestJS, Redis pub/sub, Socket.io, and MongoDB. Building an autonomous AI agent with Python, Llama 3.1, and vLLM on AWS, with Dockerized ECS deployment and HIPAA-safe PHI scrubbing via Microsoft Presidio.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>RDE Systems</h5>
              </div>
              <h3>Jan 2026 - May 2026</h3>
            </div>
            <p>
              Engineered a secure, full-stack Medication Management Web Application using React, an Adobe ColdFusion REST API, and Microsoft Azure SQL. Implemented JWT authentication, bcrypt, and role-based access control for patient portals, provider dashboards, and digital prescriptions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IST Service Desk Student Assistant</h4>
                <h5>NJIT Digital Learning and Campus Support</h5>
              </div>
              <h3>Jan 2024 - May 2026</h3>
            </div>
            <p>
              Collaborated with full-time staff at the Information Services &amp; Technology Desk to resolve complex technical issues for 13,000+ students and staff. Managed ServiceNow tickets and delivered prompt, high-satisfaction support across NJIT administrative departments.
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
              Contributed to the DentTracks SaaS platform by developing APIs to aggregate patient data into centralized databases with HIPAA compliance. Built secure file processing workflows and integrated Tableau dashboards for real-time KPI visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
