import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import { latestNews } from "../constants"

const News = () => {

  const latestNewsArr = [...latestNews];

  const [ news, setNews ] = useState(latestNewsArr[0]);

  const handleLeftClick = () => {
    for(let i = 0; i < latestNewsArr.length; i++){
      if(news === latestNewsArr[i]){
        setNews(latestNewsArr[i - 1])
      }

      if(news === latestNewsArr[0]){
        setNews(latestNewsArr[latestNewsArr.length - 1])
      }
    }
  }

  const handleRightClick = () => {
    for(let i = 0; i < latestNewsArr.length; i++){

      if(news === latestNewsArr[i]){
        setNews(latestNewsArr[i + 1]);
      }

      if(news === latestNewsArr[latestNewsArr.length - 1]){
        setNews(latestNewsArr[0])
      }
    }
  }

  return (
    <div className="w-full h-full flex flex-col relative">
      <p className="absolute text-white top-3 left-2 z-10 font-black">CAMPUS NEWS</p>
      <div className="w-full h-full absolute deep-shadow">
        <img className="w-full h-full object-cover" src={news.image} alt={news.alt} />
      </div>
      <div className="w-full h-[25%] absolute bottom-0 deep-shadow flex items-center justify-between px-3">
        <div className="w-[70%] h-full flex flex-col justify-center gap-y-[2px] text-white text-[16px]">
            <p className="pt-1 max-h-[70%] truncate hover:underline cursor-pointer font-extrabold">{news.news}</p>
            <p className="font-light tracking-tighter text-[12px]">{news.date}</p>
        </div>
        <div className="flex items-center gap-x-4">
            <FontAwesomeIcon onClick={handleLeftClick} icon={faChevronLeft} color="white" size="lg" className="hover-action" />
            <FontAwesomeIcon onClick={handleRightClick} icon={faChevronRight} color="white" size="lg" className="hover-action" />
        </div>
      </div>
    </div>
  )
}

export default News
