import "./App.css";
import Applications from "./Applications";
import Header from "./Header";

function App() {
  document.title = "iwoca | Application Portal";
  return (
    <div className="App">
      <Header />
      <Applications />
    </div>
  );
}

export default App;
