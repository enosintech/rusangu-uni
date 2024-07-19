import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navOptions } from "../constants";
import { slideshow1IImg } from "../lib";

const NavOptions = () => {
  return (
    <div className="w-full h-[45vh]">
      <div className="w-full h-full flex">
        {navOptions.map((item, idx) => (
            <div key={item.id} className="w-1/4 h-full relative group">
                <img className="absolute z-[1] w-full h-full object-cover" src={item.image} alt="choices" />
                <div className="absolute z-[2] w-full h-full bg-[rgba(255,188,205,0.6)] group-hover:opacity-0 transition-all duration-200"></div>
                <div className="absolute z-[3] left-0 right-0 mx-auto max-w-[80%] h-full flex flex-col items-center justify-center gap-y-6 text-white">
                    <FontAwesomeIcon icon={item.icon} className="text-[1.8vw]"/>
                    <p className="font-medium text-[1.2vw]">{item.name}</p>
                    <p className="text-center font-medium text-[0.9vw]">{item.text}</p>
                    <button className="bg-white w-fit h-fit p-3 hover-action deep-shadow">
                        <p className="font-extrabold text-black text-[1vw]">LEARN MORE</p>
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default NavOptions;
