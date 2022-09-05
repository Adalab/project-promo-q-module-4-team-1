function SendToApi (data){
    return fetch ('https://awesome-profile-cards.herokuapp.com/card/',
   
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
      } )
        .then((resp) => resp.json() )
        .then((data) => data  )
        /* .catch(function(error) { console.log(error); }) */;
    }
    



export default SendToApi;