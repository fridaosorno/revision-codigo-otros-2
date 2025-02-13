correccion-codigo-otros-2.js

var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault(); //Se agrego el Default
  
  var n = formulario.querySelector("#nombre");
  var e = formulario.querySelector("#edad");
  var na = formulario.querySelector("#nacionalidad");

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); 
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");// se modifico la clase, porque classadded no existe
  lista.appendChild(elementoLista); 

  // mi cerebro y mis ojos ya no dieron para encontrar mas errores :c