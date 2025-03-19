"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const searchParms = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParms);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        params.set("latitude", latitude);
        params.set("longitude", longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
        
      });
    }
  }, [pathname, searchParms]);

  return (
    <div>
      {true && (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-700 text-white">
          <Image
            src="/images/network.gif"
            alt="loading"
            width={700}
            height={700}
          />
        </div>
      )}
    </div>
  );
};

export default LocationDetector;
