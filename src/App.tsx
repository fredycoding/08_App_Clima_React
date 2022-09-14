import { useEffect, useState, FormEvent } from 'react';
import { getWeatherByCoords, getWeatherBySearch } from './Api/fetchWeather';
import { SearchBox } from "./components/SearchBox";
import { WheatherContainer } from "./components/WheatherContainer";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");
  const [misdatos, setMisDatos] = ("FREDY")

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


  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("")
    try {
      const data = await getWeatherBySearch(CITY)

      if (data === "404") {
        setError("No se encontro la ciudad")
      } else if (data === "400") {
        setError("Ingrese la ciudad")

      }else{
        setFetchedData(data)
      }

    } catch (err) {

    }

  }

  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center shadow-lg">
      <SearchBox handleSearch={handleSearch} />
      <WheatherContainer fetchedData={fetchedData} error={""} /> {/*Envio los resultados a este componente por props */}
    </div>
  )
}

export default App
