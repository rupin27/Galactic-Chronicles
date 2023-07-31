"use client";

import { CustomButtonProps2 } from '@/types';
import React from 'react';

const CustomButton2 = ({ title, handleClick }: CustomButtonProps2) => {
  return (
    <div className="mt-10">
      <a className="relative px-5 py-5 font-medium text-white group" onClick={handleClick}>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-black group-hover:bg-yellow-600 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-yellow-600 group-hover:bg-yellow-400 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-yellow-700 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-black -rotate-12"></span>
        <span className="relative">{title}</span>
      </a>
    </div>
  );
}

export default CustomButton2;