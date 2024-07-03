import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRepeat } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

import { highlightSlides } from "../constants"

const VideoCarousel = () => {

  const videoRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [ loadedData, setLoadedData ] = useState([]);
  const [ video, setVideo ] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {

  }, [])

  useEffect(() => {

  }, [])

  useEffect(() => {

  }, [])

  const handleProcess = (type, i) => {
    switch(type) {
      case "video-end" :
        ""
      case "video-last" :
        ""
      default: 
        ""  
    }
  };

  const handleLoadedMetadata = (i, e) => {};

  return (
    <div className='w-full h-full bg-black relative'>

        <div className="w-full h-full bg-green-500"></div>

        <div className="absolute left-2 top-0 bottom-0 my-auto flex flex-col gap-y-3 h-fit">
          {[1,2,3,4].map((item, index) => (
            <span className="w-[11px] h-4 bg-[rgba(255,255,255,0.5)] rounded-full overflow-hidden relative deep-shadow">
              <span />
            </span>
          ))}
        </div>

        <button className="w-10 h-10 rounded-full bg-white deep-shadow grid place-items-center absolute bottom-4 right-3 hover-action">
          <FontAwesomeIcon icon={isLastVideo ? faRepeat : isPlaying ? faPause : faPlay} size="lg" color="black" />
        </button>
    </div>
  )
}

export default VideoCarousel
