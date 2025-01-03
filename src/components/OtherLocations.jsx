import { useState, useEffect } from 'react';
import { getTemperatureString } from '../js/utils.js';

function WeatherOfCity({ city, mode }) {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    let cityUrl = new URLSearchParams(city).toString();
    let url = `https://1weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityUrl}?unitGroup=metric&key=W53D3PBB5PC5A9AWEADBJQ8VJ&contentType=json`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert('Khong tim thay thanh pho!');
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setWeatherInfo(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [city]);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  const currentConditions = weatherInfo.currentConditions;
  const temperature = currentConditions.temp;
  const humidity = currentConditions.humidity;
  const conditions = currentConditions.conditions;

  return (
    <div className="col">
      <div
        className="card h-100 p-3"
        style={{ textAlign: 'center' }}
      >
        <h5 className="card-title">{city}</h5>
        <img
          src={`assets/status/${weatherInfo.days[1].icon}.svg`}
          alt=""
          className="m-auto"
        />
        <span
          className="card-text d-block"
          style={{ textAlign: 'center' }}
        >
          <div className="d-flex justify-content-center gap-2 align-items-center">
            <i className="fa-solid fa-droplet" />
            <p className="m-0">{humidity}%</p>
          </div>
          <div>
            {getTemperatureString(mode, temperature)}
          </div>
          <div>{conditions}</div>
        </span>
      </div>
    </div>
  );
}
export default function OtherLocations({ mode }) {
  // Các thành phố bạn muốn hiển thị thời tiết
  const cities = [
    'Hà Nội',
    'Quảng Ninh',
    'Khánh Hòa',
    'Đà Nẵng',
    'Bình Dương',
    'Đồng Nai',
    'Vĩnh Long',
    'Cần Thơ',
  ];

  return (
    <div className="content-wrapper">
      <h3>Thời tiết khu vực khác</h3>
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-lg-4 g-3">
          {cities.map((city) => (
            <WeatherOfCity
              key={city}
              city={city}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
