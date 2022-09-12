function SendToApi(data) {
  return fetch(
    `//${window.location.host}/card`,

    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
    .then((resp) => resp.json())
    .then((data) => data)
    .catch(function (error) {
      console.log(error);
    });
}

export default SendToApi;
