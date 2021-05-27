import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import City from "./components/City";
import Expense from "./components/Expense";
import View from "./components/View";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Expense} />
        <Route path="/view" exact component={View} />
        <Route path="/city" exact component={City} />
      </Router>
    </div>
  );
};

export default App;
