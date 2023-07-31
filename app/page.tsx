import { Hero, SearchBar, CustomFilter, PersonCard, ShowMore } from '@/components'
import { fetchPeople } from '@/utils';
import { gender, species } from '@/constants';
import { FilterProps } from '@/types'; 

interface HomeProps {
  searchParams: FilterProps;
}

export default async function Home({ searchParams }: HomeProps) {

  const allPeople = await fetchPeople({person: searchParams.person || "", homeworld: searchParams.homeworld || "", species: searchParams.species || "", gender: searchParams.gender || "", limit: searchParams.limit || 6 });
  const isDataEmpty = !Array.isArray(allPeople) || allPeople.length < 1 || !allPeople;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Characters Catalouge
          </h1>
          <p>
            Discover the captivating characters within the vast universe of Star Wars.
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="species" options={species} />
            <CustomFilter title="gender" options={gender} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__people-wrapper">
              {allPeople?.map((person) => <PersonCard person={person} />)}
            </div>
            <ShowMore pageNumber={(searchParams.limit || 6) / 6} isNext={(searchParams.limit || 6) > allPeople.length} />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>

        )}
      </div>
    </main>
  )
}
