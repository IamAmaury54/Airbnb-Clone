import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCards from '../components/infoCards';
import Map from '../components/Map';


function Search({data}) {
        const router = useRouter();
        console.log(data)

        //ES6 Destructuring
        const {location,
               startDate,
               endDate,
               numberOfGuest} = router.query;
               console.log(numberOfGuest)

        const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
        const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
        const range = `${formattedStartDate} - ${formattedEndDate}`    

  return (
    <div>
        <Header placeholder={`${location}`} />


        <main className='flex'>
            <section className=' flex-grow pt-10 px-6'>
                <p className=' text-xs text-gray-500'
                
                >300 + stays - {range} - for {numberOfGuest} Guest</p>

                <h1 className=' text-3xl font-semibold mt-2 mb-6 '>Stays in {location}</h1>

                <div className='hidden lg:inline-flex
                  mb-5 space-x-3
                   text-gray-800 whitespace-nowrap '>

                    <p className='button'>Cancellation Flexibility</p>
                     <p className='button'>Type of place</p>
                     <p className='button'>Price</p>   
                     <p className='button'>Rooms and Beds</p>
                     <p className='button'>More filters</p>

                </div>

                <div className='flex flex-col'>
                {
                  data.map(element => (
             
                        <InfoCards 
                                  key={element.img}
                                  img={element.img}
                                  location={element.location}
                                  title={element.title}
                                  description={element.description}
                                  star={element.star}
                                  price={element.price}
                                  total={element.total}
                          />
                  ))
                }
                </div>

            </section>

                  {/* Map component */}
                <section className=' hidden xl:inline-flex xl:min-w-[400px]'>
                   <Map data={data} />
                </section>


        </main>


        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps(){
      const res = await fetch('https://www.jsonkeeper.com/b/5NPS')
      const data = await res.json();

        return {
          props: {
            data,
          }
        }

}