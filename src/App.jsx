import { useEffect, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const Homescreen = lazy(() => import("./screens/Homescreen"));

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if(loading){
    return (
      <div className="w-screen h-screen grid place-items-center">
        <Loader />
      </div>
    )
  } else {
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

}

export default App;

