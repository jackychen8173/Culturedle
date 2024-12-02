export async function fetchHello() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.json();
    return data.message;
}

export async function getFlag(country) {
    const countryCode = await getCountryCode(country);
    const imageURL =`https://flagcdn.com/h240/${countryCode.toLowerCase()}.png`;
    return imageURL;
}

export async function getCapital(country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();;
    return data[0]['capital'][0];
}

async function getCountryCode(country) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await response.json();;
    return data[0]['cca2'];
}


