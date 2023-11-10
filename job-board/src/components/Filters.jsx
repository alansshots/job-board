import React from 'react'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Briefcase, DollarSign, XCircle, CheckCircle } from 'react-feather';


const Filters = ({onFilterChange }) => {
  const [fetchError, setFetchError] = useState(null);
  const [locations, setLocations] = useState(null);
  const [industries, setIndustries] = useState(null);
  const [offers, setOffers] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [includeSalary, setIncludeSalary] = useState(false);

  const handleCheckboxChange = (event) => {
    setIncludeSalary(event.target.checked);
  };

  const handleLocationCheckbox = (event, location) => {
    const isChecked = event.target.checked;
  
    // Update the selected checkboxes state
    setSelectedLocations(prevSelected => {
      const newSelected = new Set(prevSelected);
  
      if (isChecked) {
        newSelected.add(location);
      } else {
        newSelected.delete(location);
      }
  
      // Call a function to filter your results based on selected checkboxes
      filterResults({ locations: Array.from(newSelected), industries: Array.from(selectedIndustries) });
      return newSelected;
    });
  };
  
  const handleIndustryCheckbox = (event, industry) => {
    const isChecked = event.target.checked;
  
    // Update the selected checkboxes state
    setSelectedIndustries(prevSelected => {
      const newSelected = new Set(prevSelected);
  
      if (isChecked) {
        newSelected.add(industry);
      } else {
        newSelected.delete(industry);
      }
  
      // Call a function to filter your results based on selected checkboxes
      filterResults({ locations: Array.from(selectedLocations), industries: Array.from(newSelected) });
      return newSelected;
    });
  };


  // Function to filter results based on selected checkboxes
  const filterResults = (selected) => {
    const { locations, industries } = selected;

    let filter = '';

  if (locations.length > 0) {
    const locationFilter = `location.in.(${locations.join(',')})`;
    filter += filter ? `,${locationFilter}` : locationFilter;
  }

  if (industries.length > 0) {
    const industryFilter = `industry.in.(${industries.join(',')})`;
    filter += filter ? `,${industryFilter}` : industryFilter;
  }

  if (includeSalary) {
    const salaryFilter = 'salary.is.not.null()';
    filter += filter ? `,${salaryFilter}` : salaryFilter;
  }

  // Check if nothing is selected
  if (!filter) {
    console.log('No filters selected. Fetching all data.');
    // Fetch all offers without applying any filters
    fetchAllOffers();
    return;
  }
    const fetchOffers = async () => {
      const { data, error } = await supabase
      .from('offers')
      .select('*')
      .or(filter)
    
      console.log(selected.locations);
      console.log(selected.industries);

    if (error) {
      setFetchError('Could not fetch the offers')
      setOffers(null)
    }
    if (data) {
      onFilterChange(data)
      console.log(data)
      setOffers(data);
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


useEffect(() => {
    const fetchIndustries = async () => {
        const { data, error } = await supabase
        .from('offers')
        .select('industry')
      
      if (error) {
        setFetchError('Could not fetch locations')
        setLocations(null)
      }
      if (data) {
        let IndustriesArray = data.map(industry => industry.industry)
        let uniqueIndustryNames = Array.from(new Set(IndustriesArray));
        setIndustries(uniqueIndustryNames)
        setFetchError(null)
      }
    }

    fetchIndustries()
  }, [])

  const fetchAllOffers = async () => {
    const { data, error } = await supabase
      .from('offers')
      .select('*');
  
    if (error) {
      setFetchError('Could not fetch the offers');
      setOffers(null);
    }
  
    if (data) {
      onFilterChange(data);
      console.log('All data:', data);
  
      if (data.length === 0) {
        console.log('No matches found.');
      }
  
      setOffers(data);
      setFetchError(null);
    }
  };

  return (
  <div id="Filters">
  <div className="flex flex-col justify-between bg-white rounded-xl mt-4">
  <div className="">
    <nav aria-label="Main Nav" className="flex flex-col space-y-1">

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
                        onChange={(event) => handleLocationCheckbox(event, uniqueTownNames)}
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

      {industries && (
        <nav aria-label="Industry" className="mt-2 flex flex-col px-4 trasition duration-100">
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
          {industries.map(uniqueIndustryNames => (
            <li key={uniqueIndustryNames}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100">
                <input
                id={`checkbox-${uniqueIndustryNames}`}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                onChange={(event) => handleIndustryCheckbox(event, uniqueIndustryNames)}
                />
                <label htmlFor={`checkbox-${uniqueIndustryNames}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded">{uniqueIndustryNames}</label>
              </div>
            </li>
            ))}
          </ul>
        </nav>
        )}
      </details>
{/* DO LATER NOT IMPORTANT */}
      {/* <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <DollarSign className='w-6 h-6'/>
            <span className="text-md font-semibold"> Само обяви със заплати </span>
          </div>
          <label htmlFor="Salary" className="relative h-6 w-14 cursor-pointer">
            <input
              type="checkbox"
              id="Salary"
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />
            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <XCircle data-unchecked-icon/>
              <CheckCircle data-checked-icon className="hidden h-4 w-4"/>
            </span>
            
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          </label>
          </summary>
      </details> */}

    </nav>
  </div>
</div>
    </div>
  )
}

export default Filters 

