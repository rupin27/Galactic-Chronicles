"use client";

import { useState } from "react";
import Image from 'next/image';
import { PersonProps } from "@/types";
import CustomButton from './CustomButton'
import PersonDetails from './PersonDetails';
import ImageWrapper from './ImageWrapper';

interface PersonCardProps {
    person: PersonProps;
}

const PersonCard = ({person}: PersonCardProps) => {
    const {id, name, height, mass, gender, homeworld, wiki, image, born, bornLocation, died, diedLocation, species, hairColor, eyeColor, skinColor, cybernetics, affiliations, masters, apprentices, formerAffiliations} = person;
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="person-card group">
        <div className="person-card__content">
            <h2 className="person-card__content-title">{name}</h2>
        </div>
        <p className="flex mt-6">
            <Image src="/homeworld.svg" width={20} height={20} alt="homeworld" />
            <span className="self-start text-[14px] font-semibold ml-2">
                {homeworld === "NA" ? "N/A" :  homeworld}
            </span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <ImageWrapper src={image} alt="person" />
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/height.svg" width={20} height={20} alt="height" />
                    <p className='text-[14px] ml-2'>
                        {height} /m
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/gender.svg" width={23} height={23} alt="gender" />
                    <p className='text-[14px]'>
                        {gender === "NA" ? "N/A" : gender}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/species.svg" width={20} height={20} alt="species" />
                    <p className='text-[14px]'>
                        {species === "NA" ? "N/A" : species}
                    </p>
                </div>
            </div>
            <div className="person-card__btn-container">
                <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-black border-2 border-primary-yellow" textStyles="text-white text-[14px] leading-[17px] font-bold" rightIcon="/right-arrow.svg" handleClick={()=> setIsOpen(true)} btnType="button" />
            </div>
        </div>
        <PersonDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} person={person}/>
    </div>
  )
}

export default PersonCard