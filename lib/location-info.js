export async function getLocationLatLongList(){
    try{
        const response = await fetch(`http://localhost:3000/api/location`);
        return await response.json()

    }catch(error){
        console.log(error.message)
    }
}

export async function getLocationLatLong(name){
    try{
        const response = await fetch(`http://localhost:3000/api/location/${name}`);
        return await response.json()

    }catch(error){
        console.log(error.message)
    }
}

export async function getLocationData(lat, long){
    try{
        const response = await fetch(`https://us1.api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
        return await response.json()

    }catch(error){
        console.log(error.message)

    }

}

export async function getResolvedLatLonLocationData(location, lat, lon){
    if(lat && lon){
        return {latitude: lat, longitude: lon};
    }
    if(location){
        const locationLatLon = await getLocationLatLong(location);
        if(locationLatLon.latitude && locationLatLon.longitude){
            return {latitude: locationLatLon.latitude, longitude: locationLatLon.longitude};
        }
    }


}