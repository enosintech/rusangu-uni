const Stories = (props) => {
  return (
    <div className='w-full h-full flex flex-col deep-shadow relative'>
        <div className='w-full h-full absolute'>
            <img className='w-full h-full object-cover' src={props.image} alt={props.alt}/>
            <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
        </div>
        <div className='w-full h-fit absolute bottom-2 text-white deep-shadow pl-2 pt-2'>
            <p className='text-justify max-w-[80%] font-extrabold truncate hover:underline cursor-pointer text-[0.95vw]'>{props.news}</p>
            <p className='font-light text-[rgba(255,255,255,0.9)] text-[0.75vw]'>{props.date}</p>
        </div>
    </div>
  )
}

export default Stories;
