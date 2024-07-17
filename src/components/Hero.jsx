import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from "gsap";

import { arrowImg } from "../lib";

import { eventData, latestNews } from '../constants';

import Stories from './Stories';
import ImageSlideshow from "./ImageSlideshow";
import News from "./News";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {

  const hero = useRef();
  const growDiv = useRef();
  const hideDiv = useRef();

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     defaults: {
  //       ease: "none"
  //     },
  //     scrollTrigger: {
  //       trigger: hero.current,
  //       start: "clamp(top top)",
  //       end: () => "+=" + hero.current.offsetHeight * 2,
  //       pin: true,
  //       scrub: true,
  //       pinSpacing: true,
  //       anticipatePin: true
  //     }
  //   })

  //   tl.delay(6)

  //   tl.to(growDiv.current, {
  //     clipPath: "circle(100% at 50% 120%)",
  //     pointerEvents: "auto"
  //   })

  // }, [])

  return (
    <section ref={hero} className="w-full h-screen pt-[160px] relative hero">
        <div ref={hideDiv} className="w-full h-full p-2">
            
        </div> 
    </section>
  )
}

export default Hero;
