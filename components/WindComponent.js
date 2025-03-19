import { getWind } from '@/lib/weather-info';
import Image from 'next/image';
import Card from './Card';

const WindComponent = async({lat, lon}) => {
    const windData = await getWind(lat, lon);
  return (
    <Card>
    <h6 className="feature-name">Wind</h6>
    <div className="feature-main">
      <Image
        className="max-w-20"
        src="/icons/icon_wind.png"
        alt="rain icon"
        width={18}
        height={18}
      />
      <h3 className="feature-title">Speed: {windData?.speed}</h3>
    </div>
  </Card>
  )
}

export default WindComponent