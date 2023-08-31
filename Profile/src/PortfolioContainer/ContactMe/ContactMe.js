import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

// import imgBack from "../../../src/images/mailz.jpeg";
// import load1 from "../../../src/images/load2.gif";
import load1 from '../../assets/ContactMe/load2.gif'
import imgBack from '../../assets/ContactMe/mailz.jpeg'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <div className="add-container">
            <h3>Jay Adhav</h3>
           <h6 >Email :&emsp;<span style={{color:"#ff5823"}}>jayadhav2000@gmail.com</span></h6>
           <h6>Contact :&emsp; <span style={{color:"#ff5823"}}>6356733495</span> </h6>
          </div>
        </div>
      </div>
    </div>
  );
}