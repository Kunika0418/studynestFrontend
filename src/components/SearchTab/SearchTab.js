import React, { useState } from 'react';
import { TabButton } from './Tab/TabButton';
import { TabContent } from './Tab/TabContent';
import { X } from 'lucide-react';

// Data
const countries = [
  { id: 'USA', name: 'USA', flag: '🇺🇸' },
  { id: 'UK', name: 'UK', flag: '🇬🇧' },
  { id: 'CAN', name: 'Canada', flag: '🇨🇦' },
  { id: 'DEU', name: 'Germany', flag: '🇩🇪' },
];

const cities = {
  'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
  'UK': ['London', 'Leicester', 'Sheffield', 'Manchester', 'Birmingham'],
  'CAN': ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary'],
  'DEU': ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne'],
};

const properties = {
  USA: [
    'Luxury Condo in New York',
    'Beachfront House in Los Angeles',
    'Modern Apartment in Chicago',
    'Cozy Studio in Houston',
    'Spacious Loft in Miami',
  ],
  UK: [
    'Luxury Apartment in London',
    'Student Housing in Manchester',
    'Affordable Flats in Birmingham',
    'Cozy Studio in Leeds',
  ],
  CAN: [
    'Modern Condo in Toronto',
    'Lakefront Villa in Vancouver',
    'Charming House in Montreal',
    'Cozy Cottage in Ottawa',
    'Luxury Penthouse in Calgary',
  ],
  DEU: [
    'City Center Apartment in Berlin',
    'Spacious Flat in Munich',
    'Modern Loft in Frankfurt',
    'Luxury House in Hamburg',
    'Family Home in Cologne',
  ],
};



export const CountryTabs = ({ setIsModalOpen,searchTerm }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const filteredCities = cities[selectedCountry.id].filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProperties = properties[selectedCountry.id].filter((property) =>
    property.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    // <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50'
    //   // onClick={()=>setIsModalOpen(false)}
    // >
    <div className='absolute flex justify-center w-full max-w-2xl h-fit top-16'>
      <div className="w-full rounded-lg overflow-hidden shadow-lg bg-offwhite">
        <div className='flex justify-between pr-2'>
          <div className="flex">
            {countries.map((country) => (
              <TabButton
                key={country.id}
                country={country.id}
                flag={country.flag}
                setIsModalOpen={setIsModalOpen}
                isSelected={selectedCountry.id === country.id}
                onClick={() => setSelectedCountry(country)}
              />
            ))}
          </div>
          <button onClick={() => setIsModalOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-y-6 px-4 py-2">
          <TabContent
            items={filteredCities}
            name={"Cities"}
            title={'city'}
            isModalOpen={setIsModalOpen}
          />
        </div>
        <div className="space-y-6 px-4 py-2">
          <TabContent
            items={filteredProperties}
            name={"Properties"}
            title={'title'}
            isModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
    // </div>
  );
};