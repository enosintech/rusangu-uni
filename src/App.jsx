import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

const Homescreen = lazy(() => import("./screens/Homescreen"));

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

