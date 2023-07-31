import { PersonProps } from '@/types';
"use client";
import Image from 'next/image'
import {Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ImageWrapper from './ImageWrapper';

interface PersonDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    person: PersonProps;
}

const capitalizeFirstLetter = (str: string | string[] | number): string => {
    if (typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else if (Array.isArray(str)) {
      return str.map((element) => capitalizeFirstLetter(element)).join(', ');
    } else {
      return str.toString();
    }
};

const keyDisplayMapping: Record<string, string> = {
bornLocation: 'Born Location',
diedLocation: 'Died Location',
hairColor: 'Hair Color',
skinColor: 'Skin Color',
eyeColor: 'Eye Color',
dateCreated: 'Date Created',
dateDestroyed: 'Date Destroyed',
destroyedLocation: 'Destroyed Location',
sensorColor: 'Sensor Color',
platingColor: 'Plating Color',
productLine: 'Product Line',

};

const PersonDetails = ({isOpen, closeModal, person}: PersonDetailsProps) => {
    const filteredPerson = (() => {
        const { id, wiki, image, formerAffiliations, ...filtered } = person;
        return filtered;
    })();

    const getDisplayKeyName = (key: string) => {
        return keyDisplayMapping[key] || capitalizeFirstLetter(key);
      };

    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="person-details__dialog" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                            <button type="button" onClick={closeModal} className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full">
                                <Image src="/close.svg" alt="close" width={28} height={28} className="object-contain" />
                            </button>
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="relative w-full h-50 bg-pattern bg-cover bg-center rounded-lg">
                                    <ImageWrapper src={person.image} alt="person" />
                                </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className="font-semibold text-xl capitalize">{person.name} {person.homeworld} </h2>
                                <div className="mt-3 flex flex-wrap gap-4">
                                    {Object.entries(filteredPerson).map(([key, value])=> (
                                        <div className="flex justify-between w-full text-right" key={key}>
                                            <h4 className="text-grey capitalize">
                                                {getDisplayKeyName(key)}
                                            </h4>
                                            <p className="text-black-100 font-semibold">
                                                {Array.isArray(value)
                                                    ? value
                                                        .map((element) => capitalizeFirstLetter(element))
                                                        .join(', ')
                                                    : 
                                                    capitalizeFirstLetter(value)
                                                }
                                            </p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </>
    )
}

export default PersonDetails