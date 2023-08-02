"use client"


import { CarInterface } from '@/types/car'
import calculateCarRent from '@/utils/calculateRent'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './utilsComponents';
import { Cardetail } from '.';
import { getCarImage } from '@/utils/getCars';

const CarCard = ({city_mpg,class_,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,
transmission,year}:CarInterface) => {
  const car = {city_mpg,class_,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,
    transmission,year}; 
    const carRent = calculateCarRent(city_mpg,year);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='car-card'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>{make} {model}</h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>$</span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>/day</span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
          <Image src={getCarImage(car)} alt='imagetag' fill className='object-contain'/>
        </div>
        <div className='relative group flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-gray'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/steering-wheel.svg" alt="icon" width={20} height={20}/>
              <p className='text-[14px]'>{
                transmission === 'a' ? 'Automatic':'Manual'
              }</p>
            </div>

             <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/tire.svg" alt="tire" width={20} height={20}/>
              <p className='text-[14px]'>
                {drive.toUpperCase()}
              </p>
            </div>

             <div className='flex flex-col justify-center items-center gap-2'>
              <Image src="/gas.svg" alt="gas" width={20} height={20}/>
              <p className='text-[14px]'>{
                city_mpg
              } MPG</p>
           
          </div>
          </div>
              <div className='car-card__btn-container'>
                <Button title='View More' styles='w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold' rightIcon='/right-arrow.svg' handleClick={()=>setIsOpen(true)}/>
          </div>
        </div>
        <Cardetail isOpen={isOpen} close={()=>setIsOpen(false)} car={{city_mpg,class_,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,
transmission,year}}/>
    </div>
  )
}

export default CarCard