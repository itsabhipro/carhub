"use client"

import { type } from 'os'
import React, { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

type Props = {
    title:string;
    disabled?:boolean;
    type?:"button"|"submit"|"reset";
    handleClick?:(event:React.MouseEvent)=>void;
    styles?:string;
    rightIcon?:string;
}
const Button = ({title,disabled=false,type, handleClick,styles,rightIcon}:Props) => {
  return (
    <button disabled={disabled} type={type || 'button'} className={`custom-btn ${styles}`} onClick={handleClick} >
        <span className='flex-1'>{title}</span>
        {
          rightIcon && <Image src={rightIcon as string} alt="right icon" width={20} height={20}/>
        }
    </button>
  )
}

export default Button