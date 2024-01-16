import React from "react";
import "./footer.scss"
function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="text">
          Copyright ©2024 All rights reserved | This template is made with 3 by
          <span> Colorlib</span>
        </div>
        <div className="icns">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-solid fa-globe"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
