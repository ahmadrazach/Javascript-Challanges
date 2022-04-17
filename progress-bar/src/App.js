import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {

  const [time, setTime] = useState(0);
  useEffect(() => {
    //increments the times value by 20 after 3 seconds
    let timerId = setTimeout(() => {
      time <= 90 ? setTime(time + 10) : null;
      timerId = null;
    }, 1500);
    //cleanup the timer when compoent unmount
    console.log("time :", time);
    return () => clearTimeout(timerId);
  }, [time]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <progress id="file" value={time} max="100"></progress>
      {time >= 100 ? <p>Successfully loaded</p> : <p>{time} % processed</p>}
      <div className="footer">
        <p>by Ahmed Raza</p>
      </div>
    </div>
  );
}
