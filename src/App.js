import "./global.css";
import "./animation.css";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Services/history";
import Routes from "./Routes";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
