import Lottie from "lottie-react";

import { scrollAnimation } from "../lib";

import ImageSlideshow from "./ImageSlideshow";
import News from "./News";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {
  return (
    <section className="w-full h-screen pt-[160px]">
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex gap-x-2">
              <div className="w-1/2 h-full deep-shadow rounded-bl-[10px] overflow-hidden">
                <VideoCarousel />
              </div>
              <div className="w-1/2 h-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="col-start-1 row-start-1 row-span-1 col-span-1 flex flex-col gap-y-2 text-white font-extrabold">
                    <div className="w-full h-[60%] bg-primary p-3 text-center hover:bg-white transition-all cursor-pointer group">
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
                  <p className="text-white font-extrabold text-2xl max-w-[80%]">SCROLL TO DISCOVER RU</p>
                  <div className="absolute bottom-2 right-0">
                    <Lottie animationData={scrollAnimation} className="size-20"/>
                  </div>
                </div>
                <div className="col-start-3 rounded-br-[10px] overflow-hidden row-start-2 row-span-1 col-span-1 bg-black text-white deep-shadow">
                  <News />
                </div>
                <div className="col-start-2 row-start-2 row-span-1 col-span-1 bg-primary flex flex-col justify-end items-end pb-5 pr-3 pt-1 text-white deep-shadow">
                  <p className="text-[12px] max-w-[85%] text-justify tracking-tight font-semibold directionRight">Rusangu University is a co-educational institution of higher learning jointly owned and operated by the Rusangu Conference of Seventh-day Adventists</p>
                </div>
              </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero;
