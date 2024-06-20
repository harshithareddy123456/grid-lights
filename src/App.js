import "./App.css";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState([]);
  const gridarray = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const handleclick = (id) => {
    setStatus([...status, id]);
  };
  const handleplay = () => {
    const interval = setInterval(() => {
      setStatus((status) => {
        let statusdup = [...new Set(status)];
        statusdup.pop();
        if (statusdup.length === 0) {
          clearInterval(interval);
          setStatus([]);
        }
        return statusdup;
      });
    }, 1000);

    return () => clearInterval(interval);
  };
  console.log(status);
  return (
    <div className="main-container">
      <div className="grid-container">
        {gridarray.flat().map((item, index) => (
          <div
            className={status.includes(index) ? "grid grid-active" : "grid"}
            key={index}
            onClick={() => handleclick(index)}
          ></div>
        ))}
      </div>
      <button onClick={handleplay} className="play-button">
        play
      </button>
    </div>
  );
}

export default App;
