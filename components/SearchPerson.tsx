"use client";
import { useState, useEffect, Fragment } from 'react';
import { SearchPersonProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { starWarsCharacters } from '@/constants';

const SearchPerson = ({ person, setPerson }: SearchPersonProps) => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPeople = query === "" ? starWarsCharacters :
    starWarsCharacters.filter((item) => (item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // If the input value becomes "", set the person state to ""
    if (inputValue === "") {
      setPerson('');
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  useEffect(() => {
    setPerson(query); // Call the callback when the query changes
  }, [query]);

  return (
    <div className="search-person">
      <Combobox value={person} onChange={setPerson}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/person.svg" width={20} height={20} className="ml-4" alt="Person Logo" />
          </Combobox.Button>
          <Combobox.Input className="search-person__input" placeholder="Name: eg. Yoda" displayValue={(person: string) => person} onChange={handleInputChange} />
          <Transition as={Fragment} show={showDropdown} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
            <Combobox.Options>
              {filteredPeople.length === 0 && query !== "" ? (
                <Combobox.Option value={query} className="search-person__option"> Search "{query}"</Combobox.Option>
              ) : (
                filteredPeople.map((item) => (
                  <Combobox.Option key={item} className={({ active }) => `relative search-person__option ${active ? 'bg-grey text-white' : 'text-grey-900'}`} value={item}>
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {item}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>

  )
}

export default SearchPerson;