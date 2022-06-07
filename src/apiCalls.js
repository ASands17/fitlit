//FETCH REQUESTS
export function fetchAllData() {
  let apis = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/hydration',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/sleep'
  ];

  let endpoints = apis.map((url) => {
    return fetch(url)
    .then(response => response.json())
    .catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));
  })

  const allData = Promise.all(endpoints).then((value) => {
    return value;
  });

  return allData;
}

//POST REQUESTS
export function addUserSleepData(dataToTransmit) {
  var response = fetch('http://localhost:3001/api/v1/sleep', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToTransmit)
}).then(res => {return res.json()})
.catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));

  return response;
}

export function addUserActivityData(dataToTransmit) {
  var response = fetch('http://localhost:3001/api/v1/activity', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToTransmit)
}).then(res => {return res.json()})
.catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));

  return response;
}

export function addUserHydrationData(dataToTransmit) {
  var response = fetch('http://localhost:3001/api/v1/hydration', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataToTransmit)
}).then(res => {return res.json()})
.catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));

  return response;
}

export function getHydrationData() {
  return fetch('http://localhost:3001/api/v1/hydration').then(res => res.json())
  .catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));
}

export function getActivityData() {
  return fetch('http://localhost:3001/api/v1/activity').then(res => res.json())
  .catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));
}

export function getSleepData() {
  return fetch('http://localhost:3001/api/v1/sleep').then(res => res.json())
  .catch(error => alert('🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 '));
}
