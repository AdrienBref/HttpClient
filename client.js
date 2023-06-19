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
    // Aquí puedes definir los datos que deseas enviar en el cuerpo de la solicitud
    // Pueden ser objetos, arrays, o cualquier otra estructura de datos válida
    key1: "value1",
    key2: "value2"
  };

  var url  = "http://localhost:8080";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // Establece el tipo de contenido del cuerpo de la solicitud
    },
    body: JSON.stringify(data) // Convierte los datos en formato JSON y los envía en el cuerpo de la solicitud
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