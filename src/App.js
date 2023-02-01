import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Slot from "./components/Slot";

function App(props) {
  return (
    <>
      <Header />
      <div className="container">
        <Slot x="😄" y="😄" z="😄" />
        <Slot x="😄" y="❤️" z="😄" />
        <Slot x="💯" y="😄" z="😄" />
        <Slot x="❤️" y="❤️" z="❤️" />
        <Slot x="😄" y="💯" z="😄" />
      </div>
    </>
  );
}

export default App;
