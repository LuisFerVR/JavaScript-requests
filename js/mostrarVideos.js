import {conexionAPI} from "./conexiónAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(titulo,imagen,descripcion,url){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>
    `
    return video;
}

async function listarVideos () {
    try{
        const videos = await conexionAPI.listarVideos();
        videos.forEach(video=>lista.appendChild(crearCard(video.titulo,video.imagen,video.descripcion,video.url)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}
listarVideos();