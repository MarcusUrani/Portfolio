import "./global.css";
import "./animation.css";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./Services/history";
import Routes from "./Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
