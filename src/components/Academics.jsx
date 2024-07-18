import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import { academicData, schools } from "../constants";

const Academics = () => {

  const ref = useRef();

  useGSAP(() => {
    gsap.to(".scaleImage", {
      scale: 1,
      scrollTrigger: {
        trigger: ".imgScaleDown",
        start: "clamp(top bottom)",
        end: "clamp(bottom center)",
        scrub: 5.5
      }
    })
  }, { scope: ref})

  return (
    <div ref={ref} className='w-full h-[100vh] flex flex-col common-padding mb-14 mt-5'>
      <div className="w-full h-[35%] flex flex-col">
        <div className="w-full h-full">
          <div className="w-full h-[20%] flex items-center mb-5">
            <p className="font-extrabold text-[2vw]">Academics</p>
          </div>
          <div className="w-full h-[80%]">
            <div className="w-full h-[80%]">
              <p className="text-[1.1vw] text-justify ">At Rusangu University, a premier private Christian institution in Zambia, we provide faith-based learning and academic excellence. Our seven distinguished schools offer diverse programs rooted in Christian values, preparing students for meaningful lives of service and leadership. With a commitment to nurturing both mind and spirit, we offer a holistic education that harmonizes faith and knowledge. Choose Rusangu University for an enriching academic journey that prepares you to make a positive impact in the world.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[65%] flex gap-x-6 imgScaleDown">
        {academicData.map((item, idx) => (
          <div key={item.id} className="w-1/3 h-full deep-shadow relative text-white">
            <p className="absolute top-3 left-3 z-20 font-black text-[1.1vw]">{item.subText}</p>
            <div className="w-full h-full absolute overflow-hidden">
              <img className="w-full h-full object-cover scaleImage scale-[1.5]" alt={item.alt} src={item.image} />
              <div className="w-full h-full absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.5)]"></div>
            </div>
            <div className="absolute z-10 bottom-3 left-3 flex flex-col gap-y-4">
              <p className="tracking-tight font-light max-w-[90%] text-[0.75vw] text-justify">
                {item.text}
              </p>
              <div className="flex items-center gap-x-2">
                <p className="font-extrabold hover:underline cursor-pointer">EXPLORE</p>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Academics;
