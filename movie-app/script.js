const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main=document.getElementById("main");

const form =document.getElementById("form");
const search =document.getElementById("search");


//intially get fav movies
getMovies(APIURL);

async function getMovies(url){
    
    const resp =await fetch(url); //so that we can fetch data, await to block further execution
    const respData =await resp.json(); // so that we can convert it into json 


    showMovies(respData.results);

}

function showMovies(movies){

    //clear main
    main.innerHTML='';
    //taking the imgpath and mizing it with poster path from the API Url to take poster image
    movies.forEach(movie => {
        // const img=document.createElement('img'); //creating img element
        // img.src=IMGPATH+movie.poster_path; // giving src the img path and the movie poster path for each

        const{ poster_path,title,vote_average,overview}=movie;
        // const main=document.createElement('div');
        // main.classList.add('main');
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
        <img 
            src="${IMGPATH+poster_path}" 
            alt="${title}"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h4>Overview</h4>
            ${overview}
        </div>
        `;
        //document.body.dispatchEvent()
        //console.log(maine)
        //document.body.appendChild(movieEl);
        console.log(overview)
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote>=8){
        return 'green';
    } else if (vote >=5){
        return 'orange';

    }
    else{
        return 'red';
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm=search.value;

    if(searchTerm){
        getMovies(SEARCHAPI+searchTerm)
        search.value = "";
    }
});


/*
    <img src="https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="">
    <div class="movie-info">
        <h3>Movie title</h3>
        <span>8.4</span>
    </div>
*/