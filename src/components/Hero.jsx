import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import { arrowImg } from "../lib";

import ImageSlideshow from "./ImageSlideshow";
import News from "./News";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {

  const hero = useRef();
  const growDiv = useRef();
  const hideDiv = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: hero.current,
        start: "clamp(top top)",
        end: () => "+=" + hero.current.offsetHeight * 2,
        pin: true,
        scrub: true,
        pinSpacing: true,
        anticipatePin: true
      }
    })

    tl.delay(6)

    tl.to(growDiv.current, {
      clipPath: "circle(100% at 50% 90%)",
      pointerEvents: "auto"
    })

  }, [])

  return (
    <section ref={hero} className="w-full h-screen pt-[160px] relative hero">
        <div className="absolute w-full h-full z-50 p-2 pointer-events-none">
          <div ref={growDiv} className="w-full h-full bg-white pathClip grid place-items-center relative">
            <div className="h-full pt-56 -translate-y-[7%] px-56">
              <div className="flex gap-x-20 justify-center">
                <div className="max-w-[40%]">
                  <p className="text-primary text-5xl font-extrabold">Vision</p>
                  <p className="text-3xl font-light tracking-tighter mt-5">To be a premier Christian University in Africa and beyond.</p>
                </div>
                <div className="max-w-[60%]">
                  <p className="text-primary text-5xl font-extrabold">Mission</p>
                  <p className="text-3xl font-light tracking-tighter mt-5">To provide transformative quality wholistic tertiary education to students through modern teaching, learning and research that embraces the head, heart and hand.</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-40 flex items-center gap-x-2 left-0 right-0 mx-auto w-fit">
              <p className="font-extrabold text-xl">FOUNDED IN 2003</p>
              <span className="font-semibold">|</span>
              <p className="font-light">EDUCATING FOR SERVICE</p>
            </div>
          </div>
        </div>
        <div ref={hideDiv} className="w-full h-full p-2">
            <div className="w-full h-full flex gap-x-2">
              <div className="w-1/2 h-full deep-shadow rounded-bl-[10px] overflow-hidden">
                <VideoCarousel />
              </div>
              <div className="w-1/2 h-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="col-start-1 row-start-1 row-span-1 col-span-1 flex flex-col gap-y-2 text-white font-extrabold">
                    <div className="w-full h-[60%] bg-primary p-3 text-center hover:bg-white transition-all group">
                      <p className="group-hover:text-black transition-all">APPLICATIONS FOR THE SEPT 2024 SEMESTER ARE OPEN</p>
                    </div>
                    <div className="w-full h-[40%] bg-zinc-900 text-center p-3 deep-shadow hover:bg-white group cursor-pointer transition-all">
                      <p className="group-hover:text-black transition-all">ACADEMIC PROGRAMS</p>
                    </div>
                </div>
                <div className="col-start-2 row-start-1 row-span-1 col-span-2 bg-red-500 deep-shadow">
                  <ImageSlideshow />
                </div>
                <div className="col-start-1 row-start-2 row-span-1 col-span-1 bg-primary px-2 pt-2 relative deep-shadow">
                  <div className="absolute bottom-5 right-0 flex items-center text-white font-black">
                    <div>
                      <p>SCROLL TO</p>
                      <p>DISCOVER RU</p>
                    </div>
                    <img src={arrowImg} className="invert rotate-90 size-12" />
                  </div>
                </div>
                <div className="col-start-2 overflow-hidden row-start-2 row-span-1 col-span-1 text-white deep-shadow">
                  <News />
                </div>
                <div className="col-start-3 rounded-br-[10px] row-start-2 row-span-1 col-span-1 bg-primary flex flex-col justify-end items-end pb-5 pr-3 pt-1 text-white deep-shadow">
                  <p className="text-[12px] max-w-[85%] text-justify tracking-tight font-semibold directionRight">Rusangu University is a co-educational institution of higher learning jointly owned and operated by the Rusangu Conference of Seventh-day Adventists</p>
                </div>
              </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero;
