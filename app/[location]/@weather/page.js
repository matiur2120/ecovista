import NoLocationFound from "@/components/NoLocationFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLonLocationData } from "@/lib/location-info";
const WeatherPage = async({params, searchParams}) => {
  const { location } = await params
  const {
    latitude,
    longitude
  } = await searchParams;
  const resolvedLocation = await getResolvedLatLonLocationData(location, latitude, longitude);
  if(resolvedLocation?.latitude && resolvedLocation?.longitude){
    return <WeatherComponent lat={resolvedLocation.latitude} lon={resolvedLocation.longitude} />
  }else{
    return <NoLocationFound location={location} />
  }
};

export default WeatherPage;
