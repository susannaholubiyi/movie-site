const API_KEY = "api_key=5ee8f27402aa22b8b96429569b263e47";
const API_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_URL= `${API_URL}/popular?${API_KEY}`;
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

const movieContainer = document.querySelector(".mainContainer");
getMovies(MOVIE_URL);
const showMovies = (movies)=>{
    movies.forEach(movie=>{
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML= `
        <img src="./images/eduardo-drapier-MJyNlKFBL80-unsplash.jpg" alt="">
                <div class="movieTitle">
                    <p>${title}</p>
                    <p>${vote_average}</p>
                </div>
                <h2>Overview</h2>
                <p>${overview}</p>
        `;
        movieContainer.appendChild(divTag)
    });

}