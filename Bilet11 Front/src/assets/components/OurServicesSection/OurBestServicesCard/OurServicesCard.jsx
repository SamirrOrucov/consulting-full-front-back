import React from "react";
import "./ourCard.scss";
function OurServicesCard({ icon, title, desc, serId, getFetch }) {
  async function deleteService(id) {
    await fetch("http://localhost:3001/" + id, { method: "DELETE" });  
    await getFetch();
  }
  return (
    <div className="card">
      <div className="card_container">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <i
          onClick={() => deleteService(serId)}
          class="fa-solid fa-trash-can"
        ></i>
      </div>
    </div>
  );
}

export default OurServicesCard;
