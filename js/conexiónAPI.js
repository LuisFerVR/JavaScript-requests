async function listarVideos(){
    const api = await fetch("http://localhost:3001/videos");
    const jsonApi = await api.json();
    return jsonApi;
}

async function enviarVideo(titulo, descripcion, imagen, url){
    const api = await fetch("http://localhost:3001/videos",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            titulo,
            descripcion: `${descripcion} Mil visualizaciones`,
            imagen,
            url
        })
    });
    const apiConvertida = await api.json();

    if(!api.ok){
        throw new Error ("Error al enviar el video");
    }
    return apiConvertida;
}

async function fnBuscarVideo(palabraBuscada){
    const api = await fetch(`http://localhost:3001/videos?q=${palabraBuscada}`);
    const apiJson = await api.json();
    return apiJson;
}

export const conexionAPI = {
    listarVideos,
    enviarVideo,
    fnBuscarVideo
};