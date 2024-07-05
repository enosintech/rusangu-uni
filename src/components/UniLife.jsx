import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { uniLifeData } from '../constants';

const UniLife = () => {

  const unilifeArr = [...uniLifeData];

  const [ uniLife, setUniLife ] = useState((unilifeArr[0]));

  const handleLeftClick = () => {
    for(let i = 0; i < unilifeArr.length; i++){
      if(uniLife === unilifeArr[i]){
        setUniLife(unilifeArr[i - 1])
      }

      if(uniLife === unilifeArr[0]){
        setUniLife(unilifeArr[unilifeArr.length - 1])
      }
    }
  }

  const handleRightClick = () => {
    for(let i = 0; i < unilifeArr.length; i++){
      if(uniLife === unilifeArr[i]){
        setUniLife(unilifeArr[i + 1])
      }

      if(uniLife === unilifeArr[unilifeArr.length -1]){
        setUniLife(unilifeArr[0])
      }
    }
  }

  return (
    <div className='w-full h-[75vh] relative px-56 text-white flex items-end justify-end pb-14'>
      <img className='w-full h-full object-cover absolute top-0 left-0 bg-black' alt="image" src={uniLife.image} />
      <div className='w-full h-full absolute z-[5] top-0 left-0 bg-[rgba(0,0,0,0.3)]'></div>
      <div className='absolute z-10 w-full left-0 px-56 h-[20%] top-0 flex items-center justify-between'>
        <p className='font-extrabold text-4xl'>University Life</p>
        <div className='flex gap-x-4 items-center'>
          <FontAwesomeIcon onClick={handleLeftClick} icon={faChevronLeft} color="white" size='2x' className='hover-action'/>
          <FontAwesomeIcon onClick={handleRightClick} icon={faChevronRight} color="white" size='2x' className='hover-action'/>
        </div>
      </div>
      <div className='w-fit h-fit relative z-10 flex flex-col items-end gap-y-4'>
        {unilifeArr.length !== 0 && unilifeArr.id > 1 && 
          <p className='font-bold'>Student Life</p>
        }
        <p className='max-w-[55%] text-right text-xl font-light tracking-tight'>
          Experience a vibrant and supportive university life at Rusangu University, where faith, community, and academic excellence come together.
        </p>
      </div>
    </div>
  )
}

export default UniLife;
