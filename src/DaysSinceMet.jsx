import React, { useEffect, useState } from "react";

function DaysSinceMet() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date("2025-09-09");

    const updateDays = () => {
      const today = new Date();
      const diffTime = today - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    // initial call
    updateDays();

    // update once every day
    const interval = setInterval(updateDays, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "24px" }}>
      💞 It’s been <b>{days}</b> days since I met my thangam 🤍
    </div>
  );
}

export default DaysSinceMet;
