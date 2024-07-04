import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import { eventData, latestNews } from '../constants';

import Stories from './Stories';

const UpcomingEvents = () => {
  return (
    <div className='w-full h-[100vh] relative bg-white'>
      <div className="h-full pt-56 -translate-y-[7%] px-56">
        <div className="flex h-fit gap-x-20 justify-center">
          <div className="w-1/2">
            <p className="text-primary text-5xl font-extrabold">Vision</p>
            <p className="text-3xl font-light tracking-tighter mt-5 text-justify">To be a premier Christian University in Africa and beyond.</p>
          </div>
          <span className="w-0 h-[500px] border border-tertiary" />
          <div className="w-1/2">
            <p className="text-primary text-5xl font-extrabold">Mission</p>
            <p className="text-3xl font-light tracking-tighter mt-5 text-justify">To provide transformative quality wholistic tertiary education to students through modern teaching, learning and research that embraces the head, heart and hand.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-4 flex items-center gap-x-2 left-0 right-0 mx-auto w-fit">
        <p className="font-extrabold text-xl">FOUNDED IN 2003</p>
        <span className="font-semibold">|</span>
        <p className="font-light">EDUCATING FOR SERVICE</p>
      </div>
    </div>
  )
}

export default UpcomingEvents;
