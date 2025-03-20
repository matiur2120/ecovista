'use client';
import { getLocationLatLongList } from '@/lib/location-info';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LocationSwitcher = () => {
    const [showSwitcher, setShowSwitcher] = useState(false
  );
  const [locationList, setLocationList] = useState([]);
  useEffect(()=>{
    const locationList = async() =>{    
      const locationListInof = await getLocationLatLongList();
   
      setLocationList(locationListInof)
    }
    locationList()
  },[])
  console.log(locationList)
  const handleSwitcher = () =>{
    setShowSwitcher(!showSwitcher)
  }
  return (
    <div className="relative">
    <button className='cursor-pointer' onClick={handleSwitcher}>
      <Image
        className="size-9"
        src="/icons/link.svg"
        alt="link icon"
        width={18}
        height={18}
      />
    </button>
    {showSwitcher && (
      <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
        <ul
          role="list"
          className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer text-gray-800"
        >
            {locationList?.map((locationInfo, index) => (
              <Link className='block' href={`/${locationInfo?.location}?latitude=${locationInfo?.latitude}&longitude=${locationInfo?.longitude}`} key={locationInfo?.location}>{locationInfo?.location}</Link>
            ))}
        </ul>
      </div>
    )}
   
  </div>
  )
}

export default LocationSwitcher