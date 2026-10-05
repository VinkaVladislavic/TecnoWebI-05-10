const API_KEY ='843bf643f30d8b0ad4d1856b270139f7';
const BASE_URL = 'https://api.themoviedb.org/3';
const probarApi = async() => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    console.log('Url de la peticion',url);
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log('Respuesta completa', datos);   
    console.log('Peliculas', datos.results);
    console.log('Total de resultados', datos.total_results);
}

probarApi();