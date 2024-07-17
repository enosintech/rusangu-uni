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
    <div className='w-full h-[55vh] bg-primary relative px-56 text-white flex items-end justify-end pb-14'>
      
    </div>
  )
}

export default UniLife;
