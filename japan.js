// USA Data
const usaData = {
    touristSpots: [
        'Statue of Liberty',
        'Grand Canyon',
        'Yellowstone National Park',
        'Times Square',
        'Disney World'
    ],
    localCuisine: [
        'Burgers',
        'Hot Dogs',
        'Apple Pie',
        'Clam Chowder',
        'Buffalo Wings'
    ]
};

// Function to display data
function displayUSAData() {
    const touristSpotsList = document.querySelector('#touristSpots ul');
    const localCuisineList = document.querySelector('#localCuisine ul');

    // Load tourist spots
    usaData.touristSpots.forEach(spot => {
        const listItem = document.createElement('li');
        listItem.textContent = spot;
        touristSpotsList.appendChild(listItem);
    });

    // Load local cuisine
    usaData.localCuisine.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = food;
        localCuisineList.appendChild(listItem);
    });
}

// Call function to load data on page load
window.onload = displayUSAData;
