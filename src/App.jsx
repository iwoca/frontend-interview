import "./App.css";
import Applications from "./applications/Applications";
import Header from "./header/Header";

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
