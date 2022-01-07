import axios from 'axios'
export async function getInfo(setEvents) {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/events',
      };
      
     await axios.request(options).then(function (response) {
      setEvents(response.data.message)
      console.log(response.data.message)
  }).catch(function (error) {
      console.error(error);
  });
}

export function formatDate(date){
    const newDate = new Date(date)
    const options = {year:'numeric', month:'numeric',day:'numeric'}
    const day = newDate.toLocaleString(newDate,options)
    return day
}
export async function getEvent(id, setEvent) {
    const options = {
        method: 'GET',
        url: `http://localhost:5000/events/${id}`,
      };
      
     await axios.request(options).then(function (response) {
      setEvent(response.data.message)
      console.log(response.data.message)
  }).catch(function (error) {
      console.error(error);
  });
}
export async function getGuestById(id,setGuests) {
 
    
        const options = {
            method: 'GET',
            url: `http://localhost:5000/users/${id}`,
          };
          
     axios.request(options).then(function (response) {
          setGuests(response.data.message)
         return (response.data.message)
          
      }).catch(function (error) {
          console.error(error);
      });
    }

export async function deleteById(id, setTemp) {
           
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/events/${id}`,
      };
      
 axios.request(options).then(function (response) {
      setTemp([response.data.message,1])
     return (response.data.message)
      
  }).catch(function (error) {
      setTemp([error.message,1])
      console.error(error);
  });


}
     
export async function getEventsAfterEspecifiedDate(date,setEvents) {
    const options = {
        method: 'GET',
        url: `http://localhost:5000/events/data?data=${date}`,
      };
      
     await axios.request(options).then(function (response) {
      setEvents(response.data.message)
      console.log(response.data.message)
  }).catch(function (error) {
      console.error(error);
  }); 
}
 export async function createNewEvent(body,setModal,setTemp) {
    const options = {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        method: 'POST',
        url: `http://localhost:5000/events`,
        data:body
      };
      
     await axios.request(options).then(function (response) {
     setTemp(response.data.message)
     setModal(1)
      console.log(response.data.message)
  }).catch(function (error) {
      console.error(error);
  }); 
 }
      





/**    const guests = []
    const promises = ids.map((guest)=>{
        const options = {
            method: 'GET',
            url: `http://localhost:5000/users/${guest.id}`,
          };
          
    const guestses =  axios.request(options).then(function (response) {
           guests.push(response.data.message)
         return (response.data.message)
          
      }).catch(function (error) {
          console.error(error);
      });
    })
console.log(guests)
   setGuests(guests)
  
     
 
      
 */