import { getTemperature } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const TemparatureComponent = async({lat, lon}) => {
  const temperatureData = await getTemperature(lat, lon);
 

  return (
    <Card>
    <h6 className="feature-name">Current Temperature</h6>
    <div className="feature-main">
      <Image
        className="max-w-20"
        src="/icons/icon_tempareture.png"
        alt="rain icon"
        width={18}
        height={18}
      />
      <h3 className="feature-title">{temperatureData?.temp}°C</h3>

      <span className="feature-name">Feels Like {temperatureData?.feels_like}°C</span>
    </div>
  </Card>
  )
}

export default TemparatureComponent