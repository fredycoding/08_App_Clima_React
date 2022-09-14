import { useEffect, useState } from "react";
import { getWeatherByCoords } from "./Api/fetchWeather";
import { WheatherContainer } from "./components/WheatherContainer";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;
      console.log(LAT, LON)

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);

      } catch (err) {
        console.log("Error: ", err)
        setError('Mensaje de error');
      }
    })
  }, [])


  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center shadow-lg">
      <WheatherContainer fetchedData={undefined} error={""} />
    </div>
  )
}

export default App
