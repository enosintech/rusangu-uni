import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import { eventData, latestNews } from '../constants';

import Stories from './Stories';

const UpcomingEvents = () => {
  return (
    <div className='w-full h-[100vh] relative bg-white'>
      <div className='w-full h-full px-56 relative z-50 flex gap-x-5 mt-2 mb-10'>
              <div className='w-[70%] h-full flex flex-col'>
                <div className='w-full h-[20%] flex items-center bg-primary mb-2'>
                  <div className='tracking-tight mt-5 text-3xl font-extrabold text-white px-4'>
                    <p>News and Stories from</p>
                    <p>Campus</p>
                  </div>
                </div>
                <div className='w-full h-[75%] flex gap-x-5'>
                  <div className='w-[43%] h-full'>
                  <div className='w-full h-full flex flex-col deep-shadow relative'>
                      <div className='w-full h-full absolute'>
                          <img className='w-full h-full object-cover' src={latestNews[0].image} alt={latestNews[0].alt}/>
                          <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                      </div>
                      <div className='w-full h-fit absolute bottom-3 text-white deep-shadow pl-3 pt-3'>
                          <p className='text-justify max-w-[80%] font-extrabold text-xl hover:underline cursor-pointer'>{latestNews[0].news}</p>
                          <p className='font-light text-[14px] text-[rgba(255,255,255,0.9)]'>{latestNews[0].date}</p>
                      </div>
                  </div>
                  </div>
                  <div className='w-[57%] h-full gap-5 grid grid-cols-2 grid-rows-2'>
                    <div>
                      <Stories {...latestNews[1]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[2]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[3]}/>
                    </div>
                    <div>
                      <Stories {...latestNews[1]}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[30%] h-full flex flex-col'>
                <div className='w-full h-[20%] flex items-center bg-zinc-900 mb-2'>
                  <div className="tracking-tight mt-5 text-3xl font-extrabold text-white px-4">
                    <p>Upcoming</p>
                    <p>Events</p>
                  </div>
                </div>
                <div className='w-full h-[75%] flex flex-col gap-y-4'>
                  {eventData.map((event, idx) => (
                    <div key={event.id} className={`w-full h-[25%] hover-action bg-white deep-shadow flex relative`}>
                      {idx === 0 && 
                        <p className='absolute top-1 right-10 font-extralight'>UP NEXT</p>
                      }
                      <div className='w-[85%] h-full flex flex-col justify-evenly px-4 py-1'>
                        <p className='font-extrabold text-lg text-primary'>{event.date}</p>
                        <p className='max-w-[90%] font-medium tracking-tight text-[16px]'>{event.event}</p>
                      </div>
                      <div className='w-[15%] h-full grid place-items-center'>
                        <FontAwesomeIcon icon={faChevronRight} color="black" size="xl" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    </div>
  )
}

export default UpcomingEvents;
