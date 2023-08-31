import React from "react";
import './Profile.css'
import Typical from "react-typical";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/jayadhav07">
                {" "}
                <i className="fa fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/jay-adhav">
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>

              <a href="https://www.instagram.com/jay_adhav_07/">
                {" "}
                <i className="fa fa-instagram"></i>
              </a>

              

             
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I 'M <span className="hightlighted-text">Jay</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev🔴",
                    1000,
                    "Frontend Developer 💻",
                    1000,

                    "UI Developer😎",
                    1000,

                    "React Developer🤙🏽",
                    1000,
                    "React Developer🤙🏽",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagline">
                Knack of building web app with front end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Jay CV.pdf" download="Jay Adhav.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
