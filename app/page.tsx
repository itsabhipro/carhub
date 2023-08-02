"use client"

import { CarCard, Hero } from '@/components'
import ShowMore from '@/components/ShowMore';
import { CustomFilter, SearchBar } from '@/components/utilsComponents'
import { fuels, yearsOfProduction } from '@/constants';
import { CarInterface } from '@/types/car';
import { ApiOptions } from '@/utils/apiOptions';
import getCars from '@/utils/getCars'
import Image from 'next/image'
import { useState,useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
export default function Home() {
  const [model,setModel] = useState("");
  const [manufacturer,setManufacturer] = useState("");
  const [year,setYear] = useState<string|undefined>(undefined);
  const [fuel,setFuel] = useState<string|undefined>(undefined);
  const [limit,setLimit] = useState<string|undefined>(undefined);
  const [cars,setCars] = useState([]);
  const [loading,setLoading] = useState(false);

  const getCars1 =async () => {
    setLoading(true)
    const cars = await getCars({url:'cars',model:model===""?"corolla":model,manufacturer:manufacturer,year:year || "2022",fuel:fuel,limit:limit || "10"});
    setLoading(false);
    setCars(cars)
  }
  useEffect(()=>{
    getCars1();
  },[model,manufacturer,year,fuel])
  const isDataEmpty = (cars:CarInterface[])=> (cars?.length === 0 || !Array.isArray(cars));
  return (
   <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar model={model} manufacturer={manufacturer} setModel={setModel} setManufacturer={setManufacturer} />
          <div className='home__filter-container'>
            <CustomFilter title='fuel_type' options={fuels} filter={fuel} setFilter={setFuel}/>
            <CustomFilter title='year' options={yearsOfProduction} filter={year} setFilter={setYear}/>
          </div>
        </div>
        {
          !isDataEmpty(cars) ? (
            !loading ? (
              <section>
              <div className='home__cars-wrapper'>{
                cars?.map((car:CarInterface,ind)=>(
                  <CarCard key={ind} {...car}/>
                ))
              }</div>
              <ShowMore pageNumber={(parseInt(limit!) || 10)/10} isNext={(parseInt(limit!) || 10) > cars.length} setPageNumber={setLimit}/>
            </section>
            ):(
              <div className='mt-16 w-full flex-center'>
                <Image src="/spinner.svg" alt='loader' width={50} height={50} className='object-contain'/>
              </div>
            )
          ):(
            <section className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
            </section>
          )
        }
      </div>
   </main>
  )
}
