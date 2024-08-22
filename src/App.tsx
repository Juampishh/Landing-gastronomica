import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Home/Home";

import ProductPage from "./components/Layout/Product-page";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/catalog" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
