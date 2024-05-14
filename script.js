const API_KEY = "api_key=5ee8f27402aa22b8b96429569b263e47";
const API_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;
const MOVIE_URL= `${API_URL}/movie/popular?${API_KEY}`;
console.log(MOVIE_URL)

const getMovies = (url)=>{
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data.results);
            showMovies(data.results)
        })
        .catch((error)=> console.log(error))
}

const movieContainer = document.querySelector(".movieContainer");
getMovies(MOVIE_URL);
const showMovies = (movies)=>{
    movieContainer.innerHTML=""
    movies.forEach(movie=>{
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML= `
        <img src="${IMAGE_URL}${poster_path}" alt="">
                <div class="movieTitle">
                    <p>${title}</p>
                    <p>${vote_average}</p>
                </div>
                <h2>Overview</h2>
                <p>${overview}</p>
        `;
        movieContainer.appendChild(divTag)
    });

    const form = document.querySelector(".search");
    const search = document.querySelector("#searchInput");

    form.addEventListener("keyup",(e)=>{
        e.preventDefault();
        const searchValue = search.value;
        if(searchValue){
            getMovies(SEARCH_URL + "&query=" + searchValue)
        }else {
            getMovies(API_URL)
        }
    });

}