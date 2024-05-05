async function listarVideos(){
    const api = await fetch("http://localhost:3001/videos");
    const jsonApi = await api.json();
    return jsonApi;
}

async function enviarVideo(titulo,descripcion,imagen,url){
    const api = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-Type":"apliccation/json"},
        body:JSON.stringify({
            titulo,
            descripcion:`${descripcion} Mil visualizaciones`,
            imagen,
            url
        })
    })
    const apiConvertida = api.json();
    return apiConvertida;
}

export const conexiónAPI = {
    listarVideos,
    enviarVideo
}