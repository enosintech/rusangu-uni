import Academics from "../components/Academics";
import Admissions from "../components/Admissions";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import Research from "../components/Research";
import UniLife from "../components/UniLife";
import UpcomingEvents from "../components/UpcomingEvents";

const Homescreen = () => {
  return (
    <>
        <Hero />
        <UpcomingEvents />
        <Academics />
        <Research />
        <UniLife />
        <Admissions />
        <Promo />
    </>
  )
}

export default Homescreen;
