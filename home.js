// Simulate country data with tourist spots and local cuisine
const countryData = {
    'USA': {
        touristSpots: ['Statue of Liberty', 'Grand Canyon', 'Yellowstone National Park'],
        cuisine: ['Burger', 'Hot Dog', 'Apple Pie']
    },
    'France': {
        touristSpots: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
        cuisine: ['Croissant', 'Baguette', 'Escargot']
    },
    'Japan': {
        touristSpots: ['Mount Fuji', 'Tokyo Disneyland', 'Kyoto Temples'],
        cuisine: ['Sushi', 'Ramen', 'Tempura']
    },
    'Australia': {
        touristSpots: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru'],
        cuisine: ['Vegemite', 'Pavlova', 'Lamingtons']
    }
};

// Function to show country details including tourist spots and local cuisine
function showCountryDetails(country) {
    const detailsSection = document.getElementById('countryDetails');
    const countryNameElement = document.getElementById('countryName');
    const touristSpotsElement = document.getElementById('touristSpots');
    const localCuisineElement = document.getElementById('localCuisine');

    // Check if country exists in data
    const countryInfo = countryData[country];
    if (countryInfo) {
        // Set country name
        countryNameElement.textContent = country;

        // Set tourist spots
        touristSpotsElement.innerHTML = `<h3>Top Tourist Spots:</h3><ul>${countryInfo.touristSpots.map(spot => `<li>${spot}</li>`).join('')}</ul>`;

        // Set local cuisine
        localCuisineElement.innerHTML = `<h3>Local Cuisine:</h3><ul>${countryInfo.cuisine.map(dish => `<li>${dish}</li>`).join('')}</ul>`;

        // Show the country details section
        detailsSection.style.display = 'block';
    } else {
        alert('Country data not found.');
    }
}

// Function to handle search bar input
function searchCountry() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const countries = Object.keys(countryData);
    const result = countries.filter(country => country.toLowerCase().includes(query));
    const countryItems = document.querySelectorAll('.country-item');
    
    countryItems.forEach(item => {
        const country = item.textContent.toLowerCase();
        item.style.display = result.includes(country) ? 'block' : 'none';
    });
}
