const ApiCall = (httpMethod, location, JSONdata) => {
      console.log("123")
      fetch("http://localhost:8000/" + location, {
        method: httpMethod,
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(JSONdata)
      },
      ).then(response => {
          if(response.status === 200) 
            return response.json();
          else {
            throw Error(response.message)
          }
      }).then(data => console.log(data)
      ).catch((error) => {
        console.log("poop" + error.message)
      });
}

export default ApiCall;
 