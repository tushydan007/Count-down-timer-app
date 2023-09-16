import "./App.css";
import CountDown from "./components/CountDown";

function App() {
  const time = new Date("october 14, 2023").getTime();
  console.log(time);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "70px",
        }}
      >
        <CountDown futureTimeStampInMs={1695721831000} />
        <p style={{ color: "black", fontSize: "30px" }}>
          Countdown date to Wifey's Birthday
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "70px",
        }}
      >
        <CountDown futureTimeStampInMs={1697238000000} />
        <p style={{ color: "black", fontSize: "30px" }}>
          Countdown date to our Marraige
        </p>
      </div>
    </>
  );
}

export default App;
