import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  document
    .querySelector("body")
    ?.classList.add("ltr", "main-body", "app", "sidebar-mini");
  return (
    <Router>
      <Layout>
        <p>App</p>
      </Layout>
    </Router>
  );
}

export default App;
