import "./App.css";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div>
      <Button primary>PRIMARY</Button>
      <Button>SECONDARY</Button>
      <Alert variant="danger" />
      <Alert variant="warning" />
      <Alert variant="info" />
      <Alert variant="success" />
    </div>
  );
}

export default App;
