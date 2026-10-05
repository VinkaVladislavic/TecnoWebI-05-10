const API_KEY ='843bf643f30d8b0ad4d1856b270139f7';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const moviesgrid = document.getElementById('movies-grid');

const obtenerPeliculas = async() => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
}

const crearTarjeta = (pelicula) => {
    const{title,release_date,vote_average,poster_path} = pelicula;
    const año = release_date?release_date.split('-')[0]:'N/A';
    const imagen = poster_path?`${IMAGE_URL}${poster_path}`:'';
    const rating = vote_average?vote_average.toFixed(1):'N/A';
    return `
    <article class="movie-card">
        <div class="movie-card__poster">
            <span class="movie-card__image" src="${imagen}" alt="${title}"></span>
        </div>
        <div class="movie-card__content">
            <h3 class="movie-card__title">${title}</h3>
            <p class="movie-card__year">${año}</p>
        </div>
    </article>`
    };

const iniciar = async() => {
    console.log('Mostrar peliculas');
    const peliculas = await obtenerPeliculas();
    const primeraPelicula = peliculas[0];
    console.log('Primera pelicula', primeraPelicula);
    moviesgrid.innerHTML = crearTarjeta(primeraPelicula);
    console.log('Primera pelicula renderizada');

}
iniciar();

// const probarApi = async() => {
//     const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
//     console.log('Url de la peticion',url);
//     const respuesta = await fetch(url);
//     const datos = await respuesta.json();
//     console.log('Respuesta completa', datos);   
//     console.log('Peliculas', datos.results);
//     console.log('Total de resultados', datos.total_results);
// }

// probarApi();
