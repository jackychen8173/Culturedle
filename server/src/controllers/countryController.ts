import fetch from 'node-fetch';

interface CountryData {
  cca2: string; // Country code
  capital: string[]; // Array of capital cities
}

const getCountryCode = async (country: string): Promise<string> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = (await response.json()) as CountryData[];
  return data[0].cca2;
};

const getCapital = async (country: string): Promise<string> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = (await response.json()) as CountryData[];
  return data[0].capital[0];
};

// Controller functions to be used in routes
export const getFlag = async (country: string) => {
  const countryCode = await getCountryCode(country);
  return `https://flagcdn.com/h240/${countryCode.toLowerCase()}.png`;
};

export const getHints = async (country: string) => {
  const countryCode = await getCountryCode(country);
  const capital = await getCapital(country);
  const flagURL = `https://flagcdn.com/h240/${countryCode.toLowerCase()}.png`;
  
  return [
    `The flag of this country is at ${flagURL}`,
    `The capital of this country is ${capital}`,
  ];
};
