import React, { useEffect, useState } from "react";

function DaysSinceLove() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Start date: February 14, 2026
    const startDate = new Date("2026-02-14");

    const updateDays = () => {
      const today = new Date();
      const diffTime = today - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      setDays(diffDays);
    };

    // Initial call
    updateDays();

    // Update every day
    const interval = setInterval(updateDays, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "24px" }}>
      💞 It’s been <b>{days}</b> days since Feb 14, 2026 🤍
    </div>
  );
}

export default DaysSinceLove;