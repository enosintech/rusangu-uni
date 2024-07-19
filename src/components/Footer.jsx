import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { footerLinks, footerUsefulLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full h-[500px] flex flex-col">
        <div className="w-full h-[20%] bg-gray-200 flex items-center justify-between common-padding">
            <p className="font-extrabold text-[1.1vw]">CONNECT WITH RUSANGU UNIVERSITY</p>
            <div className="flex items-center justify-center gap-x-4">
                <a className="hover-action"><FontAwesomeIcon icon={faFacebook} className="text-[1.8vw]" /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faInstagram} className="text-[1.8vw]"  /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faYoutube} className="text-[1.8vw]" /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faXTwitter} className="text-[1.8vw]"  /></a>
            </div>
        </div>
        <div className="w-full h-[35%] bg-white flex flex-col common-padding">
            <div className="w-full h-full flex flex-col flex-wrap">
                {footerUsefulLinks.map((link, index) => (
                    <div key={link.id} index={index} className="h-1/2 w-1/4 ml-1 mr-1 flex items-center gap-x-2">
                        <p className="font-light text-[0.8vw] cursor-pointer hover:underline">{link.name}</p>
                        <FontAwesomeIcon icon={faChevronRight} className="text-[0.8vw]" />
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full h-[20%] flex items-center justify-between bg-primary common-padding">
            {footerLinks.map((link, index) => (
                <p key={link.id} index={index} className="text-white text-[1.1vw] cursor-pointer hover:underline">{link.name}</p>
            ))}
        </div>
        <div className="w-full h-[25%] bg-black text-white flex items-center justify-between common-padding">
            <div className="flex gap-x-2 font-black tracking-wide text-[0.95vw]">
                <p>A Seventh-day Adventist Institution</p>
                <p className="font-extralight tracking-tight">© {new Date().getFullYear()} Rusangu University. Rusangu, Monze.</p>
            </div>
            <div onClick={() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                })
            }} className="w-12 h-12 hover-action rounded-full bg-white deep-shadow grid place-items-center">
                <FontAwesomeIcon icon={faChevronUp} color="black" className="text-[1.3vw]" />
            </div>
        </div>
    </footer>
  )
}

export default Footer;
