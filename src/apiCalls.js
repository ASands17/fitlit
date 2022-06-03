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
    .catch(error => alert("🤡 OOOPSIES! 🤨 There was an error. Please try again. 🤡 "));
  })
  
  const allData = Promise.all(endpoints).then((value) => {
    return value
  });

  return allData
}
