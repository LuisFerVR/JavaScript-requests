async function listarVideos(){
    const api = await fetch("http://localhost:3001/videos");
    const jsonApi = await api.json();
    return jsonApi;
}



export const conexiónAPI = {
    listarVideos
}