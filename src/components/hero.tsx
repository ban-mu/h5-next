import Image, { StaticImageData } from 'next/image';
import React from "react";
import variables from './hero.module.scss'

interface IProps {
  imgUrl: StaticImageData,
  altTxt: string,
  content: string,
}

export default function Hero(props: IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image src={props.imgUrl} fill style={{objectFit: 'contain'}} alt={props.altTxt} />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-600'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 style={{ color: variables.primaryColor }}>{props.content}</h1>
      </div>
    </div>
  );
}
