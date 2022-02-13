
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

    updateCity(city).then(data=>console.log(data)).catch(err=>console.log(err));
});