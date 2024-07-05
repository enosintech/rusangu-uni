import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { slideshow1IImg, slideshow2Img, slideshow3Img, slideshow4Img, slideshow5Img, slideshow6Img } from "../lib";

const ImageSlideshow = () => {

    useGSAP(() => {

        const imgs = gsap.utils.toArray(".motiv");
        const fade = 0.8;

        gsap.set(imgs[0], {autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(imgs[0], {autoAlpha: 0, duration: fade})
            .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

            imgs.push(imgs.shift())

            gsap.delayedCall(2, crossFade);
        }
        
        gsap.delayedCall(4, crossFade);

    }, [])

    
  return (
    <div className="w-full h-full relative">

        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[6]" src={slideshow1IImg} alt="girl in graduation gown"/>
        
        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[5] " src={slideshow2Img} alt="nursing school" />

        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[4]" src={slideshow3Img} alt="graduating class" />

        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[3]" src={slideshow4Img} alt="students in park" />

        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[2]" src={slideshow5Img} alt="foreign student in library" />

        <img className="w-full h-full absolute top-0 left-0 motiv object-cover z-[1]" src={slideshow6Img} alt="student studying" />
      
    </div>
  )
}

export default ImageSlideshow;
