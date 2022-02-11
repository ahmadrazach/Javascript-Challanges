const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";






async function getMovies(){
    const main=document.getElementsByTagName('main');
    const resp =await fetch(APIURL); //so that we can fetch data, await to block further execution
    const respData =await resp.json(); // so that we can convert it into json 

    //taking the imgpath and mizing it with poster path from the API Url to take poster image
    respData.results.forEach(movie => {
        // const img=document.createElement('img'); //creating img element
        // img.src=IMGPATH+movie.poster_path; // giving src the img path and the movie poster path for each

        const{ poster_path,title,vote_average}=movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
        <img 
            src="${IMGPATH+movie.poster_path}" 
            alt="${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
        `;
        document.body.appendChild(movieEl);
        //main.appendChild(movieEl);
    });
    return respData;

}

console.log(getMovies());


/*
            <img src="https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="">
            <div class="movie-info">
                <h3>Movie title</h3>
                <span>8.4</span>
            </div>
        </div>
*/