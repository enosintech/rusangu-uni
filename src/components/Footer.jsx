import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { footerLinks, footerUsefulLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full h-[500px] flex flex-col">
        <div className="w-full h-[20%] bg-gray-200 px-56 flex items-center justify-between">
            <p className="font-extrabold text-lg">CONNECT WITH RUSANGU UNIVERSITY</p>
            <div className="flex items-center justify-center gap-x-4">
                <a className="hover-action"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faYoutube} size="2xl" /></a>
                <a className="hover-action"><FontAwesomeIcon icon={faXTwitter} size="2xl" /></a>
            </div>
        </div>
        <div className="w-full h-[35%] bg-white px-56 flex flex-col">
            <div className="w-full h-full flex flex-col flex-wrap">
                {footerUsefulLinks.map((link, index) => (
                    <div key={link.id} index={index} className="h-1/2 w-1/4 ml-1 mr-1 flex items-center gap-x-2">
                        <p className="font-light text-[14px] cursor-pointer hover:underline">{link.name}</p>
                        <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full h-[20%] px-56 flex items-center justify-between bg-primary">
            {footerLinks.map((link, index) => (
                <p key={link.id} index={index} className="text-white text-lg cursor-pointer hover:underline">{link.name}</p>
            ))}
        </div>
        <div className="w-full h-[25%] bg-black text-white px-56 flex items-center justify-between">
            <div className="flex gap-x-2 font-black">
                <p>A Seventh-day Adventist Institution</p>
                <p className="font-extralight">© {new Date().getFullYear()} Rusangu University. Rusangu, Monze.</p>
            </div>
            <div onClick={() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant",
                })
            }} className="w-12 h-12 hover-action rounded-full bg-white deep-shadow grid place-items-center">
                <FontAwesomeIcon icon={faChevronUp} color="black" size="lg" />
            </div>
        </div>
    </footer>
  )
}

export default Footer;
