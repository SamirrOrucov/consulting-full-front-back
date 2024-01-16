import React, { useEffect, useState } from "react";
import OurServicesCard from "./OurBestServicesCard/OurServicesCard";
import "./ourServices.scss";
function OurServices() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3001/");
    const data = await result.json();
    setDbData(data);
  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="ourServices-container">
      <div onClick={getFetch} className="text">Our Best Services</div>
      <div className="container">
        {dbData && dbData.map((x) => (
          <div className="container_card" key={x._id}>
            <OurServicesCard
              getFetch={getFetch}
              serId={x._id}
              icon={x.icon}
              title={x.title}
              desc={x.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
