import Academics from "../components/Academics";
import Admissions from "../components/Admissions";
import Hero from "../components/Hero";
import NavOptions from "../components/NavOptions";
import Promo from "../components/Promo";
import UniLife from "../components/UniLife";
import UpcomingEvents from "../components/UpcomingEvents";

const Homescreen = () => {
  return (
    <>
        <Hero />
        <NavOptions />
        <UpcomingEvents />
        <Academics />
        <UniLife />
        <Admissions />
        <Promo />
    </>
  )
}

export default Homescreen;
