// src/components/Card/InfoCard.jsx

import "./InfoCard.css";

function InfoCard({ title, value }) {

  return (

    <div className="info-card">

      <span>{title}</span>

      <h2>{value}</h2>

    </div>

  );

}

export default InfoCard;