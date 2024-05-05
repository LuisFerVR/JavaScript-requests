import { conexionAPI } from "./conexiónAPI.js";
import fnCrearVideo from "./crearVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await conexionAPI.fnBuscarVideo(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    while(listaDeBusqueda.firstChild){
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    }

    busqueda.forEach(video => listaDeBusqueda.appendChild(fnCrearVideo(video.titulo,video.descripcion,video.url,video.imagen)));

     if(busqueda.length===0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videos para ese filtro</h2>`;
    } 
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscarVideo(evento))