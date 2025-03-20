import NoLocationFound from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLonLocationData } from "@/lib/location-info";
const TemperaturePage = async({params, searchParams}) => {
  const { location } = await params
  const {
    latitude,
    longitude
  } = await searchParams;
  const resolvedLocation = await getResolvedLatLonLocationData(location, latitude, longitude);
  if(resolvedLocation?.latitude && resolvedLocation?.longitude){
    return <TemperatureComponent lat={resolvedLocation.latitude} lon={resolvedLocation.longitude} />
  }else{
    return <NoLocationFound location={location} />
  }
};

export default TemperaturePage;
