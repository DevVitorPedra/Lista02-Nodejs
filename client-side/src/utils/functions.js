import axios from 'axios'
export async function getInfo(setEvents) {
    const options = {
        method: 'GET',
        url: 'https://localhost:5000/events',
      };
      
     await axios.request(options).then(function (response) {
      setEvents(response.data)
  }).catch(function (error) {
      console.error(error);
  });
}

