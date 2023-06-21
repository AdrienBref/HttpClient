var url  = "http://localhost:8080";
var dateHour = new Date();
var hour = dateHour.getHours();
var minutes = dateHour.getMinutes();
var day = dateHour.getDay();
var month = dateHour.getMonth();
var year = dateHour.getFullYear();

/**
 * función GET que se ejecutará cada x milisec para revisar si hay mensajes que recibir (linea 83)
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

let POST = (data) => {
  console.log("hola caracola");
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

/**
 * Esta función cogeria los valores del futuro formulario y los metería en un objeto literal para mandarlo al post como argumento, 
 * igual es waltraper pero creo que funciona. Si te fijas en el HTML llamo a esta funcion con el button  ya sabes, como en los ejercicios de Rodri con PHP)
 */

let toJson = () => {

  let key1 = "asdh89a7dqwehr8wefahpodjapoAUSDSIDHkjasida";
  let key2 = "Adrián"
  let key3 = document.getElementById('message').value;
  let key4 = hour + ":" + minutes;


  let jsonMessage = {
    value1: key1,
    value2: key2,
    value3: key3,
    value4: key4,
  }

  POST(jsonMessage);
}

setInterval(GET(), 500); //Creo que esto está funcionando--- hay que probarlo mejor