//API Call

//Step 1 : add api key add your on key
const key=""


//Step 2 : Request Create
const getCity= async (city )=>{
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search";

    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(baseURL+query);
    const data=response.json();
    
    return data;
}

// getCity("Lahore")
// .then(data=>{
//     return getWeather(data[0].Key);
// }).then(data=>{
//     console.log(data)
// })
// .catch(err=>console.log(err));

//now will be using getCity to getweather
const getWeather=async(id)=>{
    const baseURL="http://dataservice.accuweather.com/currentconditions/v1/";
    const query=`${id}?apikey=${key}`;
    const response=await fetch(baseURL+query);
    const data=await response.json();
    return data[0];
}

// getWeather("260622")
// .then(data=>console.log(data));