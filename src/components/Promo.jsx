import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons'; 
import { useLenis } from "@studio-freight/react-lenis";

import { rusanguCampusImg } from "../lib";
import { useState } from "react";

const Promo = () => {

  const [ promoVideoVisible, setPromoVideoVisible ] = useState(false);

  const lenis = useLenis(() => {
    if(promoVideoVisible){
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [promoVideoVisible])

  return (
    <div className='w-full h-[70vh] relative'>
      <div className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[20000] grid place-items-center transition-all ${promoVideoVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <FontAwesomeIcon onClick={() => {
          setPromoVideoVisible(false)
        }} icon={faClose} color="white" size='xl' className="absolute top-3 right-3 hover-action" />
        <div className="w-[65%] h-[70%] bg-black">
          <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/rlTaWd3EhK0?si=j7nlgkpEZDamccRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <img className="w-full h-full object-cover absolute z-[1] top-0 left-0" alt="rusangu Campus picture" src={rusanguCampusImg}/>
      <div className="w-full h-full absolute z-[2] bg-[rgba(0,0,0,0.6)] grid place-items-center">
        <div className="flex flex-col-reverse items-center gap-y-4">
            <div onClick={() => {
              setPromoVideoVisible(true)
            }} className="border-4 border-white rounded-full grid place-items-center w-14 h-14 hover:bg-primary hover:border-none transition-all cursor-pointer">
                <FontAwesomeIcon icon={faPlay} color="white" size="xl" />
            </div>
            <p className="text-white font-extrabold text-xl">Start Your Journey</p>
        </div>
        <button className="w-fit h-fit absolute bottom-5 left-0 right-0 mx-auto bg-primary rounded-full px-7 hover-action py-3 text-white">
          <p className="font-black text-2xl">APPLY TODAY</p>
        </button>
      </div>
    </div>
  )
}

export default Promo;
