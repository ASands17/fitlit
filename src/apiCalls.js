// // Your fetch requests will live here!
export function fetchAllData() {
  let apis = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/hydration',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/sleep'
  ];

  let endpoints = apis.map((url) => {
    return fetch(url)
    .then(res => res.json())
    .catch(error => alert("🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 "));
  });
  console.log('endpoints', endpoints)
  return endpoints
}

// console.log('I will be a fetch request!')
