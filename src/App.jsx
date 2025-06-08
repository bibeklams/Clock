import { useEffect, useState } from "react";
import "./Clock.css";
function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <h1>Nepal Time</h1>
      <div className="contain">
        This is clock that shows the time in Nepali at all times
      </div>
      <div className="date">
        This is current date:{time.toLocaleDateString()} -
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
export default Clock;
