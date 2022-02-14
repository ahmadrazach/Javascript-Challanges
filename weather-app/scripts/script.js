
const cityForm=document.querySelector('form');


const updateCity=async(city)=>{
    const cityDetails=await getCity(city);
    const weather =await getWeather(cityDetails[0].Key)
    return {
        cityDetails:cityDetails[0],
        weather:weather,
    };
};

cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const city=cityForm.city.value.trim();
    cityForm.reset();
    
    updateCity(city).then(data=>updateUI(data)).catch(err=>alert("Please enter the correct city & without spaces"));
});

//city => add to the local storage
localStorage.setItem("city",city);

//update the details to the front end
const card=document.querySelector(".card");
// if(cityForm.city.value==false ){
//  card.innerHTML="";   
// }
const details=document.querySelector(".details");
const time=document.querySelector(".time");
const updateUI=(data)=>{
    const{cityDetails,weather}=data;
    console.log(cityDetails)
    details.innerHTML=`
    <h5 class="my-5">${cityDetails.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
    if(weather.isDayTime){
        time.setAttribute("src","./imgs/sun.png");
    }
    else{
        time.setAttribute("src","./imgs/moon.png");
    }
    if(card.classList.contains('d-none')){
        card.classList.remove("d-none");
    }
}


if (localStorage.getItem("city")){
    updateCity(localStorage.getItem("city"))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err))
}

