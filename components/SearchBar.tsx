"use client";
import React, { useState, useEffect, useRef } from 'react';
import { SearchPerson } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40} className="object-contain" />
  </button>
)

const SearchBar = () => {
  const [person, setPerson] = useState('');
  const [homeworld, setHomeWorld] = useState('');
  const router = useRouter();

  const handlePersonChange = (newPerson: string) => {
    setPerson(newPerson);
  };

  useEffect(() => {
    updateSearchParams(person.toLowerCase(), homeworld.toLowerCase());
  }, [person, homeworld]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (person === "" && homeworld === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(person.toLowerCase(), homeworld.toLowerCase());
  }

  const updateSearchParams = (person: string, homeworld: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (person) {
      searchParams.set("person", person);
    } else {
      searchParams.delete("person");
    }

    if (homeworld) {
      searchParams.set("homeworld", homeworld);
    } else {
      searchParams.delete("homeworld");
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName, { scroll: false });
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item ">
        <SearchPerson person={person} setPerson={handlePersonChange} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src="/galaxy.svg" width={40} height={40} className="absolute w-[28px] h-[28px] ml-4" alt="galaxy" />
        <input type="text" name="homeworld" value={homeworld} onChange={(e) => setHomeWorld(e.target.value)} placeholder="Homeworld: eg. Tatooine" className="searchbar__input" />
        <SearchButton otherClasses="sm:hidden ml-2" />
      </div>
      <SearchButton otherClasses="max-sm:hidden ml-2" />
    </form>
  )
}

export default SearchBar;