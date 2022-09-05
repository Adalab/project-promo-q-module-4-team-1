function SendToApi (data){
    return fetch ('//localhost:4000/card',
   
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
      } )
        .then((resp) => resp.json() )
        .then((data) => data  )
         .catch(function(error) { console.log(error); }) ;
    }
    



export default SendToApi;