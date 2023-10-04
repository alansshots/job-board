import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Offers = () => {
  // Global variables 
  const [fetchError, setFetchError] = useState(null)
  const [locations, setLocations] = useState(null)
  const [offers, setOffers] = useState(null)
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());


// Offers List
useEffect(() => {
  const fetchOffers = async () => {
    const { data, error } = await supabase
      .from('offers')
      .select()
    
    if (error) {
      setFetchError('Could not fetch the offers')
      setOffers(null)
    }
    if (data) {
      setOffers(data)
      console.log(offers)
      setFetchError(null)
    }
  }

  fetchOffers()
}, [])

  // Filters 
  const handleCheckboxClick = (event, location) => {
    const isChecked = event.target.checked;
  
    // Update the selected checkboxes state
    setSelectedCheckboxes(prevSelected => {
      const newSelected = new Set(prevSelected);

      if (isChecked) {
        newSelected.add(location);
      } else {
        newSelected.delete(location);
      }
  
      // Call a function to filter your results based on selected checkboxes
      // filterResults(newSelected);
      filterResults(Array.from(newSelected));
      return newSelected;
    });
  };

  // Function to filter results based on selected checkboxes
  const filterResults = (selected) => {
    const fetchOffers = async () => {
      const { data, error } = await supabase
      .from('offers')
      .select()
      .in('location', Array.from(selected))
    
    if (error) {
      setFetchError('Could not fetch the offers')
      setOffers(null)
    }
    if (data) {
      setOffers(data);
      console.log(offers)
      setFetchError(null)
    }
  }
    fetchOffers();
};

  useEffect(() => {
    const fetchLocations = async () => {
        const { data, error } = await supabase
        .from('offers')
        .select('location')
      
      if (error) {
        setFetchError('Could not fetch locations')
        setLocations(null)
      }
      if (data) {
        let locationsArray = data.map(town => town.location)
        let uniqueTownNames = Array.from(new Set(locationsArray));
        setLocations(uniqueTownNames)
        setFetchError(null)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div id="Offers">
      <SearchBar/>
      <div className='flex flex-row justify-center items-start m-auto max-w-4xl'>
        <div className='filters mx-2 rounded-xl w-1/2'>
          {/* Filters start */}
        <div id="Filters">
  <div className="flex flex-col justify-between bg-white rounded-xl mt-4">
  <div className="">
    <nav aria-label="Main Nav" className=" flex flex-col space-y-1">

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className='w-4 h-4'/>
            <span className="text-md font-semibold"> Локация </span>
          </div>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <ChevronDown/>
          </span>
        </summary>

        <nav aria-label="Location" className="mt-2 flex flex-col px-4 trasition duration-100">
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">

          {locations && (
            <nav aria-label="Location" className="mt-2 flex flex-col px-4 transition duration-100">
              <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
                {locations.map(uniqueTownNames => (
                  <li key={uniqueTownNames}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                      <input
                        id={`checkbox-${uniqueTownNames}`}
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        onChange={(event) => handleCheckboxClick(event, uniqueTownNames)}
                      />
                      <label htmlFor={`checkbox-${uniqueTownNames}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded">{uniqueTownNames}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            )}

          </ul>
        </nav>
      </details>

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <Briefcase className='w-4 h-4'/>
            <span className="text-md font-semibold">Бранш </span>
          </div>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <ChevronDown/>
          </span>
        </summary>

        <nav aria-label="Location" className="mt-2 flex flex-col px-4 trasition duration-100">
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
            <li>
              <div className="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label htmlFor="checkbox-item-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded">Хотел</label>
              </div>
            </li>
          </ul>
        </nav>
      </details>

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <DollarSign className='w-6 h-6'/>
            <span className="text-md font-semibold"> Само обяви със заплати </span>
          </div>
          <label htmlFor="AcceptConditions" className="relative h-6 w-14 cursor-pointer">
            <input
              type="checkbox"
              id="AcceptConditions"
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />

            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <XCircle data-unchecked-icon/>
              <CheckCircle data-checked-icon className="hidden h-4 w-4"/>
            </span>
            
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          </label>
        </summary>
      </details>

    </nav>
  </div>
</div>
    </div>
    {/* End of filters  */}
        </div>
        <div className='mx-2 rounded-xl w-full'>
          {/* Offers List start */}
          <>
    {fetchError && (<p>{fetchError}</p>)}
      {offers && (
        <div className="offers">
          <div className="offers-grid">
            {offers.map(offer => (

              <article key={offer.id} className="my-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm trasition duration-200 hover:scale-[101%] hover:shadow-md">
              <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <Link to={offer.slug} className="block shrink-0"> 
                  <img src="" className="h-14 w-14 rounded-lg object-cover"/>
                </Link>
      
                  <div>
                    <h3 className="font-medium sm:text-lg">
                      <Link to={offer.slug} className="hover:underline">
                       {offer.title}
                      </Link>
                    </h3>
      
                    <p className="line-clamp-2 text-sm text-gray-700">
                      {offer.summary}
                    </p>
      
                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">

                      <span className="whitespace-nowrap font-semibold rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                        {offer.salary} лв
                      </span>
      
                      <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                      {offer.experience} 
                      </span>
      
                      {/* <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                      </span>  */}
      
      
                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>
      
                    <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                        Публикувано от 
                      <a href="#" className="ml-1 font-medium underline hover:text-gray-700">
                        {offer.author}
                      </a>
                    </p>            
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Link to={offer.slug} className="items-center text-white bg-[#0852bf] transition ease-in duration-200 hover: px-2 py-2 text-sm cursor-pointer mb-5 mr-5 rounded-xl font-semibold hover:shadow-xl">
                Свържи се
              </Link>
            </div>
          </article>
            ))}
          </div>
        </div>
      )}
  </>
  {/* Offers List End  */}
        </div>
      </div>
    </div>
  )
}

export default Offers;
