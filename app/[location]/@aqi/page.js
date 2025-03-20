import AQIComponent from "@/components/AQIComponent";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLonLocationData } from "@/lib/location-info";

const AQIPage = async({
  params,
  searchParams,
}) => {
  const { location } = await params
  const {
    latitude,
    longitude
  } = await searchParams;
  const resolvedLocation = await getResolvedLatLonLocationData(location, latitude, longitude);
  if(resolvedLocation?.latitude && resolvedLocation?.longitude){
    return <AQIComponent lat={resolvedLocation.latitude} lon={resolvedLocation.longitude} />
  }else{
    return <NoLocationFound location={location} />
  }
};

export default AQIPage;
