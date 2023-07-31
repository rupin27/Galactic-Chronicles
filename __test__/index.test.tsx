import { fetchPeople } from '../utils/index';

// Mock the fetch function to return a sample response
const mockFetch = (data: any) => jest.fn().mockResolvedValue({ json: () => data });

describe('fetchPeople function', () => {
  const samplePeopleData = [
    {
      id: 1,
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      gender: 'male',
      homeworld: 'Tatooine',
      wiki: 'https://en.wikipedia.org/wiki/Luke_Skywalker',
      image: 'luke_skywalker.jpg',
      born: 19,
      bornLocation: 'Polis Massa',
      died: 34,
      diedLocation: 'Unknown',
      species: 'Human',
      hairColor: 'Blond',
      eyeColor: 'Blue',
      skinColor: 'Fair',
      cybernetics: 'Prosthetic right hand',
      affiliations: ['Rebel Alliance', 'Jedi Order'],
      masters: ['Obi-Wan Kenobi', 'Yoda'],
      apprentices: ['Ben Solo'],
      formerAffiliations: ['Galactic Empire'],
    },
  ];

  beforeAll(() => {
    global.fetch = mockFetch(samplePeopleData);
  });

  it('should return all people when no filters are provided', async () => {
    const filters = { person: '', homeworld: '', species: '', gender: '', limit: 10 };
    const result = await fetchPeople(filters);
    expect(result).toEqual(samplePeopleData.slice(0, 10));
  });

  it('should return filtered people when filters are provided', async () => {
    const filters = { person: 'Luke', homeworld: 'Tatooine', species: 'Human', gender: 'male', limit: 10 };
    const result = await fetchPeople(filters);
    expect(result).toEqual([samplePeopleData[0]]);
  });

  it('should return limited number of people when limit is provided', async () => {
    const filters = { person: '', homeworld: '', species: '', gender: '', limit: 1 };
    const result = await fetchPeople(filters);
    expect(result).toEqual([samplePeopleData[0]]);
  });
});