import { WeatherData } from '../interfaces/WeatherData';

export const DetailsTable = ({

    data: {
        humidity,
        feels,
        visibility,
        pressure,
        longitude,
        latitude,
        windSpeed,
        },
        }: {
        data: WeatherData;
        }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td>Humedad:</td>
                    <td id="humidity">{humidity}</td>
                </tr>

                <tr>
                    <td>Grados:</td>
                    <td id="feels">{feels}</td>
                </tr>

                <tr>
                    <td>Visibilidad:</td>
                    <td id="visibility">{visibility}</td>
                </tr>

                <tr>
                    <td>Presión:</td>
                    <td id="pressure">{pressure}</td>
                </tr>

                <tr>
                    <td>Latitud:</td>
                    <td id="latitud">{latitude}</td>
                </tr>

                <tr>
                    <td>Longitud:</td>
                    <td id="longitude">{longitude}</td>
                </tr>

                <tr>
                    <td>Vientos:</td>
                    <td id="windSpeed">{windSpeed}</td>
                </tr>
            </tbody>
        </table>
    );
};