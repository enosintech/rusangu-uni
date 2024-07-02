import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        
        gsap.delayedCall(0, crossFade);

    }, [])

    
  return (
    <div className="w-full h-full relative">

        <img className="w-full h-full absolute tpo-0 left-0 bg-red-500 motiv" />
        
        <img className="w-full h-full absolute tpo-0 left-0 bg-blue-500 motiv" />

        <img className="w-full h-full absolute tpo-0 left-0 bg-green-500 motiv" />

        <img className="w-full h-full absolute tpo-0 left-0 bg-purple-500 motiv" />

        <img className="w-full h-full absolute tpo-0 left-0 bg-orange-500 motiv" />

        <img className="w-full h-full absolute tpo-0 left-0 bg-yellow-500 motiv" />
      
    </div>
  )
}

export default ImageSlideshow;
