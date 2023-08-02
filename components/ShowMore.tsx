"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from './utilsComponents';
export interface Props {
    pageNumber:number;
    isNext:boolean;
    setPageNumber:(value:string)=>void
}
const ShowMore = ({pageNumber,isNext,setPageNumber}:Props) => {
    const router = useRouter();
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10
        setPageNumber(newLimit.toString());
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>{
        !isNext && (
            <Button type='button' title='Show More' styles='bg-primary-blue rounded-full text-white' handleClick={handleNavigation}/>
        )
    }</div>
  )
}

export default ShowMore