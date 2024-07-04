import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 

import { rusanguCampusImg } from "../lib";

const Promo = () => {
  return (
    <div className='w-full h-[70vh] relative'>
      <img className="w-full h-full object-cover absolute z-[1] top-0 left-0" alt="rusangu Campus picture" src={rusanguCampusImg}/>
      <div className="w-full h-full absolute z-[2] bg-[rgba(0,0,0,0.6)] grid place-items-center">
        <div className="flex flex-col-reverse items-center gap-y-4">
            <div className="border-4 border-white rounded-full grid place-items-center w-14 h-14 hover:bg-primary hover:border-none transition-all cursor-pointer">
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
