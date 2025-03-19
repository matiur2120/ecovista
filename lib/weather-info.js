export async function getWeather(lat, lon){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.weather[0]
    }catch(error){
        console.log(error.message)
    }
}


export async function getTemperature(lat, lon){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.main
    }catch(error){
        console.log(error.message)
    }
}

export async function getWind(lat, lon){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.wind
    }catch(error){
        console.log(error.message)
    }
}


export async function getAqi(lat, lon){
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        return  data?.list[0]
    }catch(error){
        console.log(error.message)
    }
}