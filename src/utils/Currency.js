// currencyUtils.js

// Map of countries to their currency symbols
const countryToCurrencySymbol = {
  USA: "$", // US Dollar
  UK: "£", // British Pound
  Australia: "A$", // Australian Dollar
  Germany: "€", // Euro
  Canada: "C$", // Canadian Dollar
};

// Function to get currency symbol by country
export const getCurrencySymbolByCountry = (country) => {
  return countryToCurrencySymbol[country] || "$"; // Default to USD symbol
};
