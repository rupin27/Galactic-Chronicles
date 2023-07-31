"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';

const Hero = () => {

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const heroSectionHeight = heroSection.clientHeight;
      window.scrollTo({ top: heroSectionHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find Star Wars Character's information— quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your Star Wars experience with our effortless search process.
        </p>

        <CustomButton2 title="Explore Characters" handleClick={handleScroll} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image animate-float">
          <Image src="/hero.png" alt="hero" fill sizes="(max-width: 640px) 100vw, 640px" className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero