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

  return (
    <section ref={hero} className="w-full h-screen pt-[130px] relative hero">
        <div ref={hideDiv} className="w-full h-full px-2 pt-2">
            <div className="w-full h-full overflow-hidden bg-black">
              {/* <VideoCarousel /> */}

            </div>
        </div> 
    </section>
  )
}

export default Hero;
