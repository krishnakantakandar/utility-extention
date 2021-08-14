import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./component/MainPageComponent";
import Temp from "./WeatherComponent/Temp";
import NotePad from "./notePadComponent/NotePad";

function App() {
  const whichExtention = localStorage.getItem("extentionIs");

  if (whichExtention === "weather") {
    console.log("weather");
    return (
      <div className="App">
        <Temp></Temp>
      </div>
    );
  }
  if (whichExtention === "coding") {
    console.log("coding");
    return (
      <div className="App">
        <MainPageComponent></MainPageComponent>
      </div>
    );
  }

  if (whichExtention === "notePad") {
    return (
      <div className="App">
        <NotePad></NotePad>
      </div>
    );
  }
  return (
    <div className="App">
      <MainPageComponent></MainPageComponent>
    </div>
  );
}

export default App;
