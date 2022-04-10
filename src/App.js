import "./App.css";
import Welcome from "./components/Welcome";
import { CounterProvider } from "./components/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Welcome/>
      </div>
    </CounterProvider>
  );
}
export default App;
