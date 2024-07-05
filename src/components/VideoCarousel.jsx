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
    gsap.to(".slider", {
      xPercent: -100 * videoId,
      duration: 2,
      ease: 'power4.out',
      onStart: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }))
      }
    })
  }, [isEnd, videoId])

  useEffect(() => {
    if(loadedData.length > 3){
      if(!isPlaying){
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  useEffect(() => {

    let currentProgress = 0;

    let span = videoSpanRef.current;

    if(span[videoId]){
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if(progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              height: "80px",
            })

            gsap.to(span[videoId], {
              height: `${currentProgress}%`,
              backgroundColor: "#800020"
            })
          }
        },
        onComplete: () => {
          if(isPlaying){
            gsap.to(videoDivRef.current[videoId], {
              height: "16px",
            })

            gsap.to(span[videoId], {
              backgroundColor: "rgba(255,255,255,0.3)"
            })
          }
        },
      })

      if(videoId === 0){
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId].currentTime / highlightSlides[videoId].videoDuration);
      }

      if(isPlaying){
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }

  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch(type) {
      case "video-end" :
        setVideo((prevVideo) => ({...prevVideo, isEnd: true, videoId: i + 1}))
        break;
      case "video-last" :
        setVideo((prevVideo) => ({...prevVideo, videoId: 0}))
        break;
      case 'video-reset' :
        setVideo((prevVideo) => ({...prevVideo, isLastVideo: false, videoId: 0}))
        break;
      case 'play' : 
        setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying}))
        break;
      case 'pause' :
        setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying }))
        break;
      default: 
        return video;  
    }
  };

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <div className='w-full h-full bg-black relative'>

        <div className="w-full h-full relative flex">
          {highlightSlides.map((slide, index) => (
            <div key={slide.id} className="slider w-full h-full bg-black min-w-full">
              <video id="video" className="w-full h-full pointer-events-none object-cover" playsInline={true} muted={true} controls={false} ref={(el) => (videoRef.current[index] = el)} onPlay={() => {
                setVideo((prevVideo) => ({
                  ...prevVideo, isPlaying: true,
                }))
              }} onLoadedMetadata={(e) => handleLoadedMetadata(index, e)} onEnded={() => 
                index !== 3
                ? handleProcess("video-end", index)
                : handleProcess("video-last")
              }>
                <source src={slide.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className="absolute z-20 left-2 top-0 bottom-0 my-auto flex flex-col gap-y-3 h-fit">
          {videoRef.current.map((_, index) => (
            <span key={index} ref={(el) => (videoDivRef.current[index] = el)} className="w-[11px] h-4 bg-[rgba(255,255,255,0.3)] rounded-full overflow-hidden relative deep-shadow">
              <span className="absolute h-full w-full rounded-full youYes deep-shadow" ref={(el) => (videoSpanRef.current[index] = el)} />
            </span>
          ))}
        </div>

        <button className="w-10 h-10 z-20 rounded-full bg-white deep-shadow grid place-items-center absolute bottom-4 right-3 hover-action" onClick={isLastVideo ? () => handleProcess("video-reset") : !isPlaying ? () => handleProcess('play') : () => handleProcess("pause")}>
          <FontAwesomeIcon icon={isLastVideo ? faRepeat : isPlaying ? faPause : faPlay} size="lg" color="black" />
        </button>
    </div>
  )
}

export default VideoCarousel
