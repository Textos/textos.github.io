"use strict";
var forma=document.getElementById("forma");
var campos= ["nombre","secreto","navegador","email","usuario","url","telefono"];
var salidas=["salidaNombre","salidaSecreto","salidaNavegador","salidaEmail","salidaUsuario","salidaUrl","salidaTelefono"];
forma.addEventListener("submit",procesa,false);

function procesa(){
    for(var i=0, longitud=campos.length; i<longitud;i++ ){
        var campos=forma[campos[i]];
        var salidas = document.getElementById(salidas[i]);
        salida.value=campo.value;
    }
    var nombre=forma["nombre"].value;
    forma["nombre"].value="hola"+nombre;
}
