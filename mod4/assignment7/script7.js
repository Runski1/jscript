'use strict';
// sources:
// https://digitransit.fi/en/developers/apis/1-routing-api/itinerary-planning/
// route points are in Google polyline encoded format, so you need to add support for Leafletiin:
// https://github.com/jieter/Leaflet.encoded


// show the map
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'; // cors issues may arise, use proxy or browser plugin if necessary

// fetch route with origin and target
function getRoute(origin, target) {
    // Delete old routes from map first:
    map.eachLayer((layer) => {
        if (layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });
    // GraphQL query
    const GQLQuery = `{
  plan(
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;
// fetch with optional parameters:
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
      'digitransit-subscription-key': 'a5e40205ed774018b7580940980d75a0',
        },
        body: JSON.stringify({query: GQLQuery}),
    };
    let startTime;
    let endTime;
    fetch(apiAddress, fetchOptions).then(function (response) {
        return response.json();
    }).then(function (result) { // CBA to learn to understand leaflet functionality
        console.log(result.data.plan.itineraries[0].legs);
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        startTime = googleEncodedRoute[0].startTime;
        endTime = googleEncodedRoute[googleEncodedRoute.length - 1].endTime;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
        printTimes([startTime, endTime]) // Because this function is called here instead of event listener...
        return [startTime, endTime];  // ... returned array is not used for anything
    }).catch(function (e) {
        console.error(e.message);
    });
}


// My stuff is added here //

const button = document.querySelector('input[type="submit"]');
button.addEventListener('click', async (event) => {
    event.preventDefault();
    const startLocation = document.querySelector('#query').value;
    const startCoords = await getCoords(startLocation);
    getRoute(
        {latitude: startCoords[1], longitude: startCoords[0]}, 
        {latitude: 60.224134315222514, longitude: 24.758623338563144}
    )// If I store this in variable and console log it, It'll be undefined.
    // Why doesn't it wait until promise from fetch is fulfilled???
    // I tried const timeArray = await getRoute, and getRoute was async function.
});

async function getCoords(address) {
    const response = await fetch(
        `https://api.digitransit.fi/geocoding/v1/search?` +
        `digitransit-subscription-key=a5e40205ed774018b7580940980d75a0` +
        `&text=${address}` +
        `&size=1`
        );
    const geoJSON = await response.json();
    const coords = geoJSON.features[0].geometry.coordinates;
    return coords;
}

function printTimes(timeArray) {
    let startTime = new Date(timeArray[0]);
    let endTime = new Date(timeArray[1]);
    let startHours = startTime.getHours();
    let startMinutes = startTime.getMinutes();
    let endHours = endTime.getHours();
    let endMinutes = endTime.getMinutes();
    const timeStrings = [];
    for (let num of [startHours, startMinutes, endHours, endMinutes]) { // Converting times to strings might not be needed
        if (num < 10) {
            timeStrings.push(`0${num.toString()}`); // This is for printing ie. 13:07 instead of 13:7
        } else {
            timeStrings.push(num.toString());
        }
    }
    // Ugly element injection, need to clean up later
    document.querySelector('.times').innerHTML = `<p>Start time: ${timeStrings[0]}:${timeStrings[1]}</p>\n<p>End time: ${timeStrings[2]}:${timeStrings[3]}</p>`
    
}