import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Student</h4>
                <h5>Atria Institute of Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering in Bengaluru (2023–2027). Building
              production-grade AI systems and competing in national hackathons
              while maintaining a strong academic foundation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SRE-Bot</h4>
                <h5>Meta × Scaler OpenEnv Hackathon</h5>
              </div>
              <h3>APR 26</h3>
            </div>
            <p>
              Built a production-grade autonomous SRE benchmark — engineered a
              Cascading Ghost fault injector and containerized simulation engine
              with fractional scoring. Deployed on Vercel + Hugging Face Spaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ContraCulture</h4>
                <h5>Lingo.dev Hackathon</h5>
              </div>
              <h3>MAR 26</h3>
            </div>
            <p>
              AI cultural adaptation engine that rewrites landing page copy for
              global markets using Hofstede's cultural psychology framework.
              Generates predicted conversion-lift estimates per locale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research</h4>
                <h5>IJIRT Publication</h5>
              </div>
              <h3>NOV 25</h3>
            </div>
            <p>
              First-author research publication on predictive dust accumulation
              and efficiency loss in Solar-PV systems. Built an LSTM-based model
              from environmental sensor data. IJIRT Vol. 12, Issue 6.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
