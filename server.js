// //Environment variables from .env
// require('dotenv').config();

// // Dependencies 
// const express = require('express');
// const cors = require('cors');
// // Setup
// // make express app
// const app = express();
// // get da port
// const PORT = process.env.PORT;
// // use da cors
// app.use(cors());
// // API Routes
// //      app.<verb>(<noun>. handler);
// app.get('/location', (request, response) => {
//     try {
//         //built-in
//         const location = request.query.location;
//         const result = getLatLong(location);
//         response.status(200).json(result);
//     }
//     catch(err) {
//         response.status(500).send('Sorry, the elves are on break and could not process your request');
//     }
// });

// // node CJS "require" parses JSON into array/object
// const geoData = require('./data/geo.json');

// // helpers

// function getLatLong(/* Location goes here*/) {
//     // return hard coded for now, API will replace this
//     return toLocation(geoData);
// }
// function toLocation(/* geodata */) {
//     const firstResult = geoData.results[0];
//     const geometry = firstResult.geometry;

//     return {
//         formatted_query: firstResult.formatted_address,
//         latitude: geometry.location.lat,
//         longiture: geometry.location.lng
//     };
// }

// // Pull Da Lever!
// app.listen(PORT, () => {
//     console.log('The elves are working on PORT', PORT);
// });








// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
// - make an express app!
const app = express();
// - get the port on which to run the server
const PORT = process.env.PORT;
// - enable CORS
app.use(cors());

// API Routes
// app.<verb>(<noun>, handler);
app.get('/location', (request, response) => {
    try {
        // use express built-in query object
        const location = request.query.location;
        const result = getLatLng(location);
        response.status(200).json(result);
    }
    catch(err) {
        // TODO: make an object and send via .json...
        response.status(500).send('Sorry something went wrong, please try again');
    }
});

// node CJS "require" will parse JSON for us into array/object
const geoData = require('./data/geo.json');

// Helper Functions
function getLatLng(/*location*/) {
    // ignore location for now, return hard-coded file
    // api call will go here

    return toLocation(geoData);
}

function toLocation(/*geoData*/) {
    const firstResult = geoData.results[0];
    const geometry = firstResult.geometry;

    return {
        formatted_query: firstResult.formatted_address,
        latitude: geometry.location.lat,
        longitude: geometry.location.lng
    };
}

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});