import { getLocationByName } from "../location-util";

export async function GET(req, {params}){
    const {name} = await params;
    console.log(name)
    const locationData = getLocationByName(name);
    return Response.json(locationData)
    

}