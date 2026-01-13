import React from "react";

interface MonogramProps {
  initials?: string;
  date?: string;
}

const Monogram: React.FC<MonogramProps> = ({
  initials = "L & J",
  date = "10.24.2026",
}) => {
  return (
    <div className="home-monogram">
      <div className="monogram-initials">{initials}</div>
      <div className="monogram-line" />
      <div className="monogram-date">{date}</div>
    </div>
  );
};

export default Monogram;
