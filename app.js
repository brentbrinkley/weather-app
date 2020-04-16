// const request = require('request')

const request = require('request')

// const url =
//   'http://api.weatherstack.com/current?access_key=39774ebeed2cb17626a0a29ff94c4a66&query=37.8267,-122.4233&units=f'

// const mapBoxToken =
//   'pk.eyJ1IjoiaWFtZWNoZWxvbiIsImEiOiJjazh3dXRuYmwxMHRqM2dudnBlM2NranAzIn0.IvXwexxyTu7T2a3zW20ZpA'

// request({ url, json: true }, (error, response) => {
//   console.log(
//     `It is currently ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`
//   )
// })
// const mapURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaWFtZWNoZWxvbiIsImEiOiJjazh3dXRuYmwxMHRqM2dudnBlM2NranAzIn0.IvXwexxyTu7T2a3zW20ZpA&limit=1`

// request({ url: mapURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to the server')
//   } else if (response.body.features.length === 0) {
//     console.log('invalid input')
//   } else {
//     const [lat, long] = response.body.features[0].center
//     console.log(`Lat: ${lat}, Long: ${long}`)
//   }
// })

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiaWFtZWNoZWxvbiIsImEiOiJjazh3dXRuYmwxMHRqM2dudnBlM2NranAzIn0.IvXwexxyTu7T2a3zW20ZpA&limit=1`

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('Invalid Input', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
      // const [lat, long] = response.body.features[0].center
      // return `Lat: ${lat}, Long: ${long}`
    }
  })
}

geocode('Raleigh', (error, data) => {})
