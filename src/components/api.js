/**
 * Makes a call to server with the client request
 * @param {string} httpMethod 
 * @param {string} location 
 * @param {JSON} JSONdata 
 */
const ApiCall = (httpMethod, location, JSONdata, authToken) => {

  return fetch("http://recruitmebackend.herokuapp.com/" + location, {
    method: httpMethod,
    headers: {
      "Content-Type":"application/json",
      'Authorization': 'Bearer ' + authToken
    },
    body: JSON.stringify(JSONdata)
  },
  ).then(response => {
      if(response.status >= 200 && response.status <= 299) 
        return response.json();
      else {
        return response.json().then(err => Promise.reject(err));
      }
  }).then(data => {return data}
  ).catch(error => {
    throw error
  });

}

export default ApiCall;
 