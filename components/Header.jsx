import React, { useState } from 'react'

import Image from 'next/image'

import { FiSearch } from 'react-icons/fi';
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import {useRouter} from 'next/dist/client/router'




function Header({placeholder}) {

  const [search, setSearch] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuest, setNumberOfGuest] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = ()  => {
    setSearch('')
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const searchDirectMeTo = () => {
    router.push({
                  pathname: '/search',
                  query: {
                         location: search,
                         startDate: startDate.toISOString(),
                         endDate: endDate.toISOString(),
                         numberOfGuest: numberOfGuest,
                      }

    })
  }
 

  return (
    <header className='sticky
     top-0
      z-50
       grid
        grid-cols-3
         bg-white shadow-md
          py-5 px-5 md:px-10'>
        {/* Left */}
            <div onClick={() => router.push('/')} className='relative
                                       flex items-center 
                                       h-8 cursor-pointer my-auto'>
           
           
                <Image src='https://links.papareact.com/qd3'
                   layout='fill'
                   objectFit='contain'
                   objectPosition='left'
                   alt='logo' />
           
        
            </div>

            {/* Midle - Search */}
            <div className='flex justify-around 
            items-center
             md:border-2 
             rounded-full 
             py-2 ml-10 sm:ml-5 md:shadow-lg'>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            type="text" placeholder={placeholder  || 'Start your search'}
                 className='pl-5 border-none outline-none
                  bg-transparent text-sm
                   text-gray-600 placeholder-gray-400 w-96' />

                <FiSearch className='hidden md:inline h-10 w-10
                 bg-red-400
                  text-white 
                  font-extrabold
                  rounded-full
                   p-3 cursor-pointer hover hover:bg-red-500 md:shadow-lg ' />
            </div>


            {/* Right */}
            <div  className='flex justify-end items-center space-x-5 text-gray-500'>
                <p className='hidden md:inline cursor-pointer hover:shadow-sm'>Become a host</p>    
                <BsGlobe className='h-6 cursor-pointer hover:shadow-xl' />

                    <div className='flex items-center 
                    border-2
                     rounded-full
                      p-2
                       hover:bg-slate-50 space-x-2 hover:shadow-xl cursor-pointer '>
                    <AiOutlineMenu className='h-6 ' />
                    <FaUserCircle className='h-6' />
                    </div>

             </div>

        {search && (
              <div className='flex flex-col col-span-3 mx-auto mt-2'>
                <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange={handleSelect}
                />
                <div className='flex items-center border-b-2 font-semibold '>
                  <h2 className=' font-semibold
                   text-2xl
                   pl-3
                   flex-grow text-gray-500'>Number of Guest</h2>

                  <FaUsers className='h-5' />
                  <input type="number" className='w-12 ml-2 pl-2
                   text-red-400 '
                   value={numberOfGuest}
                   onChange={e => setNumberOfGuest(e.target.value)}
                   min={1}
                   max={10}
                   />
                </div>

                  <div className='flex justify-around pt-3'>
                    <button onClick={resetInput}
                    className='bg-gray-300 px-5 py-2
                     rounded-md text-gray-600'
                     >Cancel</button>

                    <button onClick={searchDirectMeTo} className='bg-red-300 px-5 py-2 text-gray-700
                     rounded-md hover:bg-red-400 '
                     >Search</button>
                  </div>

                </div>
        )}

    </header>
  )
}

export default Header