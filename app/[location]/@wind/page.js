import NoLocationFound from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLonLocationData } from "@/lib/location-info";
const WindPage = async({params, searchParams}) => {
  const { location } = await params
  const {
    latitude,
    longitude
  } = await searchParams;
  const resolvedLocation = await getResolvedLatLonLocationData(location, latitude, longitude);
  if(resolvedLocation?.latitude && resolvedLocation?.longitude){
    return <WindComponent lat={resolvedLocation.latitude} lon={resolvedLocation.longitude} />
  }else{
    return <NoLocationFound location={location} />
  }
};

export default WindPage;
