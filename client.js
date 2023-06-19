fetch("http://localhost:8080")
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Error en la solicitud. Código de estado: " + response.status);
    }
  })
  .then(responseText => {
    console.log("Respuesta del servidor: " + responseText);
  })
  .catch(error => {
    console.log("Error en la solicitud: " + error.message);
  });

  var data = {

    key1: "value1",
    key2: "value2"
  };

  var url  = "http://localhost:8080";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(data) 
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Error en la solicitud. Código de estado: " + response.status);
    }
  })
  .then(responseText => {
    console.log("Respuesta del servidor: " + responseText);
  })
  .catch(error => {
    console.log("Error en la solicitud: " + error.message);
  });