var url  = "http://localhost:8080";

/**
 * función GET que se ejecutará cada x milisec para revisar si hay mensajes que recibir (linea 67)
 */

let GET = () => {

  fetch(url)
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

}

/**
 * El método POST se ejecutará al envío del formulario ??? El botón está funcionando, llega el mensaje al backend (probado)
 * 
 * Actualmente manda lo que está declado dentro de la función, el objetivo es invocar a la funcion POST(data) siendo data un JSON en el que sea:
 * key1: idmensaje(hash??)
 * key2: idcliente(hash??)
 * key3: mensaje
 * key4: hora y fecha del mensaje
 */

let POST = (/*data*/) => {

    var data = {

      key1: "value1",
      key2: "value2"
    };

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

}

setInterval(GET(), 500); //Creo que esto está funcionando--- hay que probarlo mejor