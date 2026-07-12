// src/components/Card/StatCard.jsx

import "./StatCard.css";

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card">

      <div
        className="stat-top"
        style={{ background: color }}
      ></div>

      <span>{title}</span>

      <h2>{value}</h2>

    </div>
  );
}

export default StatCard;