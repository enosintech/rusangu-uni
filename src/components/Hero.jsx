import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import { eventData } from "../constants";

import { scrollAnimation } from "../lib";

import ImageSlideshow from "./ImageSlideshow";
import News from "./News";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {
  return (
    <section className="w-full h-screen pt-[160px]">
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex gap-x-2">
              <div className="w-1/2 h-full bg-orange-500 deep-shadow">
                <VideoCarousel />
              </div>
              <div className="w-1/2 h-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="col-start-1 row-start-1 row-span-1 col-span-1 bg-yellow-500 deep-shadow flex flex-col">
                  <div className="w-full h-[75%] bg-primary"></div>
                  <div className="w-full h-[25%] pt-1 pl-2 bg-zinc-800 text-white">
                    <p className="font-extrabold text-lg">Dr Dorababu Tadepalli - VC</p>
                    <div className="flex items-center gap-x-2">
                      <p className="font-extralight text-[14px] cursor-pointer hover:underline">Meet the Administration</p>
                      <FontAwesomeIcon icon={faChevronRight} color={"white"} size="xs" />
                    </div>
                  </div>    
                </div>
                <div className="col-start-2 row-start-1 row-span-1 col-span-1 bg-red-500 deep-shadow">
                  <ImageSlideshow />
                </div>
                <div className="col-start-3 row-start-1 row-span-1 col-span-1 bg-white deep-shadow grid place-items-center">
                  <div className="w-[65%] h-[90%] flex flex-col">
                    <p className="font-extrabold w-full h-1/6 grid place-items-center text-lg">
                      UPCOMING EVENTS
                    </p>
                    {eventData.map((item, index) => (
                      <div key={item.id} index={index} className={`${ index === 1 ? "opacity-80" : index === 2 ? "opacity-60" : index === 3 ? "opacity-50" : index === 4 ? "opacity-20" : "opacity-100"} w-full h-1/6 flex`}>
                        <div className="w-[40%] h-full border-r-4 border-primary grid place-items-center">
                          <p className="text-[14px] font-semibold text-primary -translate-x-1">{item.date}</p>
                        </div>
                        <div className="w-[60%] h-full grid place-items-center pl-1">
                          <p className="font-light tracking-tight text-[10px] truncate max-w-[95%]">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-start-1 row-start-2 row-span-1 col-span-1 bg-primary px-2 pt-2 relative deep-shadow">
                  <p className="text-white font-extrabold text-2xl max-w-[80%]">SCROLL TO DISCOVER RU</p>
                  <div className="absolute bottom-2 right-0">
                    <Lottie animationData={scrollAnimation} className="size-28"/>
                  </div>
                </div>
                <div className="col-start-2 row-start-2 row-span-1 col-span-1 bg-black text-white deep-shadow">
                  <News />
                </div>
                <div className="col-start-3 row-start-2 row-span-1 col-span-1 bg-primary flex flex-col justify-between items-end pb-4 pr-3 pt-1 text-white deep-shadow">
                  <p className="font-extrabold text-2xl max-w-[60%] directionRight">EDUCATING FOR SERVICE</p>
                  <p className="text-[12px] max-w-[90%] text-justify font-light directionRight">Rusangu University is a co-educational institution of higher learning jointly owned and operated by the Rusangu Conference of Seventh-day Adventists</p>
                </div>
              </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero;
