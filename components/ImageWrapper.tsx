"use client";
import { useState } from 'react';
import Image from 'next/image';

interface ImageWrapperProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt}) => {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-40 my-3 object-contain">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill 
          priority 
          className="object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <Image
          src="/starwars.png"
          alt={alt}
          fill
          priority
          className="object-contain"
        />
      )}
    </div>
  );
};

export default ImageWrapper;