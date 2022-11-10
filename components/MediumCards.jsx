import React from 'react'
import Image from 'next/image'

function MediumCards({img, title}) {
  return (
    <div className='cursor-pointer
     hover:scale-105
      transform transition duration-300 ease-out text-center'>

    <div className='relative w-80 h-80'>
         <Image src={img} 
                layout='fill'
                className=' rounded-xl'    
                alt='image'
         /> 
    </div>

    <h3 className=' text-2xl my-4'>{title}</h3>
    </div>
  )
}

export default MediumCards