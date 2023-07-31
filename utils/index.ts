import { FilterProps, PersonProps } from "@/types";

export async function fetchPeople(filters: FilterProps) {
  const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
  const result = await response.json();

  const filteredPeople: PersonProps[] = result.filter((person: PersonProps) => {
    // check if person filter is provided
    if (filters.person && filters.person.trim() !== "") {
      const nameMatches = person.name.toLowerCase().includes(filters.person.trim().toLowerCase());
      if (!nameMatches) {
        return false;
      }// if the person's name doesn't match, exclude from the results
    }

    // check if homeworld filter is provided
    if (filters.homeworld && filters.homeworld.trim() !== "") {
      // check if person.homeworld is a string before applying toLowerCase()
      const homeworldMatches = typeof person.homeworld === 'string' && person.homeworld.toLowerCase().includes(filters.homeworld.trim().toLowerCase());
      if (!homeworldMatches) {
        return false;
      } // if the person's homeworld doesn't match, exclude from the results
    }

    // check if gender filter is provided
    if (filters.gender && filters.gender.trim() !== "") {
      const genderMatches = person.gender.toLowerCase() === filters.gender.trim().toLowerCase();
      if (!genderMatches) {
        return false;
      }// ff the person's gender doesn't match, exclude from the results
    }

    // check if species filter is provided
    if (filters.species && filters.species.trim() !== "") {
      const speciesMatches = person.species.toLowerCase().includes(filters.species.trim().toLowerCase());
      if (!speciesMatches) {
        return false;
      }// if the person's species doesn't match, exclude from the results
    }
    // if none of the filters are provided or the person matches all the provided filters, include in the results
    return true;
  });
  // if limit is not provided, use all filtered elements
  const limit = filters.limit || filteredPeople.length;
  const limitedPeople = filteredPeople.slice(0, limit);

  return limitedPeople;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName
}