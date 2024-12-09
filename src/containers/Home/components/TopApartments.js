import React, { useEffect, useState } from "react";
import axios from "axios";
import ApartmentCard from "../../../components/Card/Card";
import FilterBar from "../../Property/components/FilterBar";
import PropertyDetail from "../../Property/PropertyDetail/PropertyDetail";

const TopApartments = () => {
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [filteredApartments, setFilteredApartments] = useState([]);
    const [viewed, setViewed] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/propertyauth/properties`); // Replace with your API URL
                const allProperties = response.data.properties; // Assuming response is an object with a 'properties' field
                setProperties(allProperties);
                setFilteredApartments(allProperties);
                // Sort properties by views in descending order and select top 6


                // Set unique countries from the top properties
                const uniqueCountries = Array.from(
                    new Set(allProperties.map((apt) => apt.country))
                );
                setCountries(uniqueCountries);
            } catch (err) {
                setError("Failed to fetch properties.");
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        const topProperties = filteredApartments
            .sort((a, b) => b.views - a.views)
            .slice(0, 6);

        setViewed(topProperties);
    }, [filteredApartments])

    useEffect(() => {
        if (selectedCountry) {
            const uniqueCities = Array.from(
                new Set(
                    properties
                        .filter((apt) => apt.country === selectedCountry)
                        .map((apt) => apt.city)
                )
            );
            setCities(uniqueCities);
            setSelectedCity(""); // Reset city when country changes
        } else {
            setCities([]);
        }
    }, [selectedCountry, properties]);

    useEffect(() => {
        if (selectedCountry != "") {
            const filtered = properties.filter((apt) => {
                const isCountryMatch =
                    !selectedCountry || apt.country === selectedCountry;
                const isCityMatch = !selectedCity || apt.city === selectedCity;
                return isCountryMatch && isCityMatch;
            });
            setFilteredApartments(filtered); // Update filtered apartments
        }
        else{
            setFilteredApartments(properties)
        }
    }, [selectedCountry, selectedCity, properties]);

    if (loading) {
        return <div className="text-center text-blue-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="bg-slate-50 border-y-[1px] border-primary-100">
            <FilterBar
                countries={countries}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                cities={cities}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                price={false}
            />
            <div className="w-full h-auto flex flex-col items-center py-10">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-2xl font-semibold font-sans text-accent-100">
                        Top{" "}
                        <span className="text-3xl font-bold text-primary-200">
                            Apartments
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 mt-8">
                    {viewed.map((property) => (
                        <ApartmentCard
                            key={property._id}
                            {...property}
                            onClick={() => setSelectedApartment(property)}
                        />
                    ))}
                </div>
            </div>
            {selectedApartment && (
                <PropertyDetail
                    apartment={selectedApartment}
                    onClose={() => setSelectedApartment(null)}
                />
            )}
        </div>
    );
};

export default TopApartments;
