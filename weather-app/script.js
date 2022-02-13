
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

    updateCity(city).then(data=>updateUI(data)).catch(err=>console.log(err));
});


//update the details to the front end
const card=document.querySelector(".card");
const details=document.querySelector(".details");

const updateUI=(data)=>{
    const{cityDetails,weather}=data;
    console.log(cityDetails)
    details.innerHTML=`<h5 class="my-5">${cityDetails.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`
}

