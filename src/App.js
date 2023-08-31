import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

import "./styles/app.css";

import "./styles/home.css";

import "./styles/footer.css";

import { paths } from "./components/index";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {paths.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
