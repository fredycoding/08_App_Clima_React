import { useEffect, useState, FormEvent } from 'react';
import { getWeatherByCoords, getWeatherBySearch } from './Api/fetchWeather';
import { SearchBox } from "./components/SearchBox";
import { WheatherContainer } from "./components/WheatherContainer";
import Swal from 'sweetalert2'

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
        setError("Error: " + err);
      }
    })
  }, [])


  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("")
    try {
      const data = await getWeatherBySearch(CITY)


      if (data.cod === "404") {
        Swal.fire(
          'Error',
          `Error: ${data.message}`,
          'error'
        )       
      
      } else if (data.cod === "400") {
        Swal.fire(
          'Error',
          `Error: ${data.message}`,
          'error'
        )
      }else{
        setFetchedData(data)
      }

    } catch (err) {

    }

  }

  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center shadow-lg">
      <h1 className='font-bold text-slate-700 text-3xl mb-6'>APLICACIÓN DEL CLIMA</h1>
      <SearchBox handleSearch={handleSearch} />
      <WheatherContainer fetchedData={fetchedData} error={""} /> {/*Envio los resultados a este componente por props */}
    </div>
  )
}

export default App
