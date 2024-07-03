import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import loaderLogo from "/assets/icons/fav.png";

const Loader = () => {

    useGSAP(() => {
        gsap.to("#loadingLogo", {
            scale: 1.05,
            opacity: 0.2,
            yoyo: true,
            repeat: -1,
            ease: "power1.in",
            duration: 0.4
          })
    }, [])

  return (
    <div>
      <img id="loadingLogo" className="w-28 h-28 object-contain" alt="rusangu university logo" src={loaderLogo} />
    </div>
  )
}

export default Loader;
