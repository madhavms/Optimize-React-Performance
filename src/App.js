import "./App.css";
import Counter from "./components/Counter";
import { CounterProvider } from "./components/CounterContext";
import SomeScreen from "./components/SomeScreen";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter somescreen={<SomeScreen label="Some screen" />} />{" "}
        {/* Counter component uses the provider state*/}
      </div>
    </CounterProvider>
  );
}

export default App;
