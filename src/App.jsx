import "./app.scss"
import Screen1 from "./screen1/Screen1"
import Screen2 from "./screen2/Screen2"

function App() {
  return (
    <div className="app" >
      <div className="slides">
        <Screen1></Screen1>
        <Screen2></Screen2>
      </div>


    </div>
  );
}

export default App;
