import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchPersonProps {
    person: string;
    setPerson: (person: string) => void;
}

export interface PersonProps {
    id: number;
    name: string;
    height: number;
    mass: number;
    gender: string;
    homeworld: string;
    wiki: string;
    image: string;
    born: number;
    bornLocation: string;
    died: number;
    diedLocation: number;
    species: string,
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    cybernetics: string;
    affiliations: string[];
    masters: string[];
    apprentices: string[]
    formerAffiliations: []
}

export interface FilterProps {
    person: string;
    homeworld: string;
    species: string;
    gender: string;
    limit: number;  
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface CustomButtonProps2 {
    title: string;
    handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}