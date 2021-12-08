import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer";
import "./global.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" element={<Home/>} />
      </Switch>
      <Switch>
        <Route path="/projects" element={<Projects/>} />
      </Switch>
      <Switch>
        <Route path="/contact" element={<Contact/>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
