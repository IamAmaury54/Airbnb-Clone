import React from 'react'

function Footer() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-4 
                    gap-y-10 px-32 py-14
                    bg-gray-100 text-gray-600'>

        <div className=' space-y-3 text-xs text-gray-800'>
                <h5 className='font-bold'>About</h5>
                <p>How Airbnb works</p>
                <p>News Room</p>
                <p>Investor</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
        </div>



        <div className=' space-y-3 text-xs text-gray-800'>
                <h5 className='font-bold'>Comunity</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Referral accepted</p>
                <p>Amaury54</p>
        </div>

       <div className=' space-y-3 text-xs text-gray-800'>
                <h5 className='font-bold'>Host</h5>
                <p>Amaury54 React</p>
                <p>Presents</p>
                <p>From Scratch to a full Stack Hero</p>
                <p>Hundreds of Students</p>
                <p>Join Now</p>
        </div>

       <div className=' space-y-3 text-xs text-gray-800'>
                <h5 className='font-bold'>Support</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Investor</p>
               
        </div>


    </div>
  )
}

export default Footer