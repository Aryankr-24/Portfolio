import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p> HI, I'M ARYAN KUMAR</p>
        <h1>FULL STACK DEVELOPER</h1>
        <div>
            <Link to="https://drive.google.com/file/d/1CtoKdjBVL2B1_3DMCsvgBtl0mN_pKzFU/view?usp=drivesdk" className="btn">Resume</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
