import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { navInfoLinks, navMainLinks } from "../constants";

import { ruLogoImage } from "../lib";

const Navbar = () => {
    const linkRef = useRef();

    const [ height, setHeight ] = useState();
    const [ dropDown, setDropDown ] = useState({});
    const [ dropdownVisible, setDropdownVisible ] = useState(false);

    useEffect(() => {
        if(linkRef){
            setHeight(linkRef.current.offsetHeight);
        }
    }, [])

  return (
    <nav onMouseLeave={() => {
        setDropdownVisible(false)
    }} className="w-full h-[160px] flex flex-col fixed top-0 left-0 z-[9999] deep-shadow">
        <div onMouseEnter={() => {
            setDropdownVisible(false)
        }} className="w-full h-[30%] px-56 flex items-center justify-between bg-white">
            <div className="flex items-center justify-evenly h-full w-fit">
                <p className="font-bold text-gray-800 mr-4">Information For:</p>
                {navInfoLinks.map((link, index) => (
                    <p key={link.id} index={index} className="tracking-wide text-primary hover:bg-primary hover:text-white w-fit px-3 grid place-items-center h-full transition-all cursor-pointer">
                        {link.name}
                    </p>
                ))}
            </div>
            <div className="flex flex-row-reverse h-full">
                <div className="w-[55%] h-full flex items-center bg-black">
                    <input className="w-[75%] h-full bg-white px-2 placeholder:text-black outline-none" placeholder="Search" />
                    <button className="w-[25%] h-full bg-secondary flex items-center justify-center hover:bg-primary cursor-pointer active:opacity-70">
                        <FontAwesomeIcon icon={faSearch} color="white" size="lg"/>
                    </button>
                </div>
                <div className="px-4 w-[45%] h-full grid place-items-center bg-secondary hover:bg-primary text-white cursor-pointer active:opacity-70">
                    <p className="font-extrabold">Login to RU Portal</p>
                </div>
            </div>
        </div>
        <div className="w-full h-[70%] bg-primary px-56 flex items-center justify-between">
            <Link onMouseEnter={() => {
                setDropdownVisible(false)
            }} className="logo w-[20%] flex items-center text-white">
                <img src={ruLogoImage} className="size-20 object-contain" />
                <div className="flex flex-col font-black text-lg">
                    <p>RUSANGU</p>
                    <p>UNIVERSITY</p>
                </div>
            </Link>
            <div className="h-full w-[22%]" onMouseEnter={() => {
                setDropdownVisible(false)
            }}></div>
            <div ref={linkRef} className="w-[58%] h-full flex relative">
                {navMainLinks.map((link, index) => (
                    <div key={link.id} index={index} onMouseEnter={() => {
                        setDropDown({...link})
                        setDropdownVisible(true)
                    }} className={`w-1/5 h-full hover:bg-[#460012] grid place-items-center text-white relative group cursor-pointer ${dropdownVisible && dropDown.id === link.id ? "bg-[#460012]" : ""}`}>
                        <p className="font-light">{link.name}</p>
                        <span className={`${dropdownVisible && dropDown.id === link.id ? "opacity-100" : "opacity-0" } absolute bottom-3 mx-auto left-0 right-0 w-10 h-[5px] bg-white rounded-full opacity-0 group-hover:opacity-100`} />
                    </div>
                ))}
                <div style={{
                    position: "absolute",
                    top: height,
                    height: dropdownVisible ? 300 : 0
                }} onMouseLeave={() => {
                    setDropdownVisible(false)
                }} className={`w-full h-[300px] bg-white deep-shadow transition-all duration-200 flex flex-col px-8`}>
                    <div className={`w-full h-[20%] border-gray-200 flex items-end pb-1 ${dropdownVisible ? "border-b" : "border-none"}`}>
                            <p className={`font-extrabold text-xl ${dropdownVisible ? "opacity-100" : "opacity-0"} transition-all duration-200`}>IN THIS SECTION</p>
                    </div>
                    <div className={`w-full h-[70%] pt-5 ${dropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"} flex flex-col gap-y-4 flex-wrap`}>
                        {dropDown?.preview?.map((preview, index) => (
                            <p key={preview.id} index={index} className={`transition-all duration-200 hover-action text-primary font-light text-lg`}>{preview.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
