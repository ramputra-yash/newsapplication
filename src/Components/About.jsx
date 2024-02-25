import React, { Component } from "react";
import profileImg from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <>
      <a href="#about" id="about"></a>
      <h1>About</h1>
      <br/>
        <div id="about" className="about">
          <div className="left">
            <img src={profileImg} alt="" />
          </div>
          <div className="right">
            <h2>Yogesh Sharma</h2>
            <h2>A Web Developer.</h2>
            <hr/>
            <p>
            Yogesh Sharma is a 17-year-old web developer currently studying in the 10th standard. Despite their young age, Yogesh has already gained 3 years of experience in web development. Their passion for coding and web technologies has driven them to excel in the field, constantly seeking new challenges and opportunities to enhance their skills. With a solid foundation in web development and a thirst for knowledge, Yogesh is poised to make a significant impact in the world of technology.
            </p>
            <a href="https://nextlevel.app/user/ffpaofsk">
              <div className="btn">
                Explore more &rarr;
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
