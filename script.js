gsap.from('#page1 h1',{
    x:-100,
    opacity:0
})
gsap.from('#page1 button',{
    x:100,
    opacity:0
})

gsap.from('#page2-left',{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:'#page2',
        // scroller:'#page2',
        // markers:true,
        start:'top 120vh',
        end:'top 130vh'
    }
})

gsap.from('#page2-right',{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:'#page2',
        // scroller:'#page2',
        // markers:true,
        start:'top 120vh',
        end:'top 130vh'
    }
})

gsap.from('#page3 img',{
    scale:0,
    duration:1.2,
    scrollTrigger:{
        trigger:'#page3',
        // scroller:'#page2',
        // markers:true,
        start:'top 220vh',
        end:'top 230vh'
    }
})

test = async()=>{

    
    const url = 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=37.7879493%2C-122.3961974&language=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

test()


// https://maps.googleapis.com/maps/api/geocode/json?address={input_location}&key={api_key}


let map;
let service;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.712776, lng: -74.005974 }, // Default to New York coordinates
        zoom: 14,
    });
}

function findNearbyLocations() {
    const locationInput = document.getElementById("locationInput").value;

    // Use Geocoding to get coordinates for the input location
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: locationInput }, (results, status) => {
        if (status === "OK" && results[0]) {
            const location = results[0].geometry.location;
            map.setCenter(location);

            // Use PlacesService to find nearby restaurants
            service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: location,
                radius: 1000, // within 1000 meters
                type: 'restaurant' // search for restaurants
            }, (results, status) => {
                if (status === "OK") {
                    displayLocations(results);
                } else {
                    alert("Error fetching nearby locations");
                }
            });
        } else {
            alert("Location not found");
        }
    });
}

function displayLocations(locations) {
    const resultsContainer = document.createElement("ul");
    locations.forEach((place) => {
        const li = document.createElement("li");
        li.textContent = place.name;
        resultsContainer.appendChild(li);
    });
    document.body.appendChild(resultsContainer);
}