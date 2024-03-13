import React from 'react'
import Style from "../Stylesheets/Footer.module.css";
import logo from "../Assets/tcblogo.jpg";
import linkedin from "../Assets/linkdein.svg";
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";

function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.left}>
        <img className={Style.logo_class} src={logo} alt='logo'></img>
        <span className={Style.imgText}> TheCodeBreakers </span>
      </div>

      <div className={Style.right}>
        <div className={Style.mainCont}>
          <div className={Style.Information}>
            <h2>Information</h2>
            <ul className={Style.list}>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={Style.Club}>
            <h2>Club</h2>
            <ul className={Style.list2}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={Style.Copyright}>
          © Copyright 2022 - TheCodeBreakers
        </div>
      </div>

      <div className={Style.rightmost}>
        <img src={linkedin} alt="linkedin"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={instagram} alt="instagram"></img>
      </div>
    </div>
  )
}

export default Footer
