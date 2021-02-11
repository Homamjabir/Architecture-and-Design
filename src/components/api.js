

const ApiCall = (httpMethod, location, JSONdata) => {
      console.log("123")
      fetch("http://localhost:8000/" + location, {
        method: httpMethod,
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(JSONdata)
      },
      ).then(response => response.json()).then(data => console.log(data));
}

export default ApiCall;
 