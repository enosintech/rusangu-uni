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
      clipPath: "circle(100% at 50% 120%)",
      pointerEvents: "auto"
    })

  }, [])

  return (
    <section ref={hero} className="w-full h-screen pt-[160px] relative hero">
        <div className="absolute top-0 pt-[140px] translate-y-5 w-full h-full z-50 p-2 pointer-events-none">
          <div ref={growDiv} className="w-full h-full bg-white pathClip grid place-items-center relative deep-shadow">
            <div className='w-full h-full px-56 relative z-50 flex gap-x-5 mt-2 mb-10'>
              <div className='w-[70%] h-full flex flex-col'>
                <div className='w-full h-[20%] flex items-center'>
                  <div className='tracking-tight mt-5'>
                    <p className='font-light text-[14px]'>News and Stories from</p>
                    <p className='text-3xl font-extrabold'>Campus</p>
                  </div>
                </div>
                <div className='w-full h-[75%] flex gap-x-5'>
                  <div className='w-[43%] h-full'>
                  <div className='w-full h-full flex flex-col deep-shadow relative'>
                      <div className='w-full h-full absolute'>
                          <img className='w-full h-full object-cover' src={latestNews[0].image} alt={latestNews[0].alt}/>
                          <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                      </div>
                      <div className='w-full h-fit absolute bottom-3 text-white deep-shadow pl-3 pt-3'>
                          <p className='text-justify max-w-[80%] font-black tracking-tight text-xl hover:underline cursor-pointer'>{latestNews[0].news}</p>
                          <p className='font-light text-[14px] text-[rgba(255,255,255,0.9)]'>{latestNews[0].date}</p>
                      </div>
                  </div>
                  </div>
                  <div className='w-[57%] h-full gap-5 grid grid-cols-2 grid-rows-2'>
                    <div>
                      <Stories {...latestNews[1]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[2]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[3]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[1]}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[30%] h-full flex flex-col'>
                <div className='w-full h-[20%] flex items-center'>
                  <div className="tracking-tight mt-5">
                    <p className='font-light text-[14px]'>Upcoming</p>
                    <p className='text-3xl font-extrabold'>Events</p>
                  </div>
                </div>
                <div className='w-full h-[75%] flex flex-col gap-y-4'>
                  {eventData.map((event, idx) => (
                    <div key={event.id} className={`w-full h-[25%] hover-action bg-white deep-shadow flex ${idx === 2 ? "opacity-60" : idx === 3 ? "opacity-30" : "opacity-100" } relative`}>
                      {idx === 0 && 
                        <p className='absolute top-1 right-10 font-extralight'>UP NEXT</p>
                      }
                      <div className='w-[85%] h-full flex flex-col justify-evenly px-4 py-1'>
                        <p className='font-extrabold text-lg text-primary'>{event.date}</p>
                        <p className='max-w-[90%] font-medium tracking-tight text-[16px]'>{event.event}</p>
                      </div>
                      <div className='w-[15%] h-full grid place-items-center'>
                        <FontAwesomeIcon icon={faChevronRight} color="black" size="xl" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                    <div className="w-full h-[60%] bg-primary p-3 text-center relative">
                      <p>APPLICATIONS FOR THE SEPT 2024 SEMESTER ARE OPEN</p>
                      <button className="absolute bottom-4 left-0 right-0 mx-auto group hover:bg-zinc-900 transition-all text-black w-fit h-fit px-5 py-2 rounded-full bg-white deep-shadow grid place-items-center">
                        <p className="text-[14px] font-black group-hover:text-white transition-all">APPLY TODAY</p>
                      </button>
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
