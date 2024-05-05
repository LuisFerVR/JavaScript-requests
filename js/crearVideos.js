import {conexionAPI} from "./conexiónAPI";

const formulario = document.querySelector("[data-formulario]");

function fnCrearVideo (evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]");
    const url = document.querySelector("[data-url]")
    const imagen = document.querySelector("[data-imagen]")
    const descripcion = Math.floor(Math.random()*10).toString();
}

formulario.addEventListener("submit",evento=>fnCrearVideo(evento));