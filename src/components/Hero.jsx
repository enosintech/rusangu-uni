import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from "gsap";

import { arrowImg, rusanguCampusImg, slideshow3Img, slideshow4Img, slideshow5Img, unilife2Img } from "../lib";

import { eventData, latestNews } from '../constants';

import Stories from './Stories';
import ImageSlideshow from "./ImageSlideshow";
import News from "./News";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {

  useGSAP(() => {
    const imgs = gsap.utils.toArray(".motiv");
        const fade = 0.8;

        gsap.set(imgs[0], {autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(imgs[0], {autoAlpha: 0, duration: fade})
            .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

            imgs.push(imgs.shift())

            gsap.delayedCall(3, crossFade);
        }
        
        gsap.delayedCall(3, crossFade);
  })

  return (
    <section className="w-full h-screen pt-[130px] relative hero">
        <div className="w-full h-full px-2 pt-2">
            <div className="w-full h-full overflow-hidden bg-black relative">
                <img className="w-full h-full object-cover motiv absolute top-0 left-0 z-[4]" src={rusanguCampusImg} alt="hero Image 1"/>
                <img className="w-full h-full object-cover motiv absolute top-0 left-0 z-[3]" src={slideshow3Img} alt="hero Image 2"/>
                <img className="w-full h-full object-cover motiv absolute top-0 left-0 z-[2]" src={slideshow4Img} alt="hero Image 3"/>
                <img className="w-full h-full object-cover motiv absolute top-0 left-0 z-[1]" src={slideshow5Img} alt="hero Image 4"/>
                <div className="w-full h-full absolute top-0 left-0 z-[5] bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[45%] via-transparent to-transparent"></div>
                <div className="w-fit h-fit flex flex-col items-center gap-y-5 absolute bottom-0 left-0 right-0 mx-auto z-[5] text-center text-white">
                  <p className="text-[1.5vw] font-semibold max-w-[60%]">Rusangu University is a co-educational institution of higher learning jointly owned and operated by the Rusangu Conference of Seventh-day Adventists.</p>
                  <button className="bg-primary w-fit h-fit px-4 py-3">
                    <p className="tracking-tight text-[1.2vw]">APPLY NOW</p>
                  </button>
                  <div className="w-full h-fit py-3 grid place-items-center">
                    <p className="text-[0.9vw] font-medium tracking-tight">SCROLL TO DISCOVER RU</p>
                  </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero;
