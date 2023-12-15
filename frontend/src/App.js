import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/MyNotes" component={MyNotes} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
