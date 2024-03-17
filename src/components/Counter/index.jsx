import React, { useState, useEffect } from "react";

function Timer({ onTimerEnd }) {
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || 0
  );
  const [minutes, setMinutes] = useState(
    parseInt(localStorage.getItem("minutes")) || 10
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
          onTimerEnd(); // Timer has ended, you can add your logic here
          alert("Timer has ended!");
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes]);

  useEffect(() => {
    localStorage.setItem("seconds", seconds.toString());
    localStorage.setItem("minutes", minutes.toString());
  }, [seconds, minutes]);

  return (
    <div>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
