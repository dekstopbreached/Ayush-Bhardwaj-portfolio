import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science Engineering (Data Science)</h4>
                <h5>Chandigarh University, Mohali, Punjab</h5>
              </div>
              <h3>June 2024 - June 2028</h3>
            </div>
            <p>
              Relevant coursework includes Data Structures & Algorithms,
              Database Management Systems, Machine Learning, Data Engineering,
              Business Intelligence, Software Engineering, Operating Systems,
              and Computer Architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>Jan 2026 - Mar 2026</h3>
            </div>
            <p>
              Built a full stack e-commerce platform using React.js, Next.js,
              and Zod schema validation, with product browsing, cart
              management, and a quick-add modal with dynamic size and color
              selection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Robotics Simulation Engineer</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>Oct 2024 - Dec 2024</h3>
            </div>
            <p>
              Designed and simulated a 6-DOF pick-and-place robot arm in
              CoppeliaSim, using Python APIs for inverse kinematics, motion
              scripting, and collision-aware real-world style automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
