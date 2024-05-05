import {conexionAPI} from "./conexiónAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function fnCrearVideo (evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = Math.floor(Math.random()*10).toString();

    await conexionAPI.enviarVideo(titulo,descripcion,imagen,url);
    window.location.href="../pages/envio-concluido.html";
}

formulario.addEventListener("submit",evento=>fnCrearVideo(evento));