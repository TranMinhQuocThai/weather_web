import { useEffect, useState } from 'react';

export default function Header({ fetchWeatherInfo, changeMode }) {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');

  async function getCurrentCity() {
    if (!navigator.geolocation) {
      setCity('Ho Chi Minh');
      return;
    }
    await navigator.geolocation.getCurrentPosition(async (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      try {
        let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=88d8c3a16490d6e5ba6e293820f3a903`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setCity(data[0].name);
        fetchWeatherInfo(data[0].name);
      } catch (error) {
        console.error(error.message);
        setCity('Ho Chi Minh');
        fetchWeatherInfo('Ho Chi Minh');
      }
    });
  }

  useEffect(() => {
    getCurrentCity();
  }, []);

  return (
    <section className="content-wrapper">
      <div className="d-flex flex-column align-items-start flex-sm-row gap-1 mb-2">
        <a
          className="flex-shrink-0 me-1"
          href=""
        >
          <img
            src="/assets/logo.svg"
            alt=""
            style={{ height: '2em' }}
          />
        </a>
        <form
          action=""
          className="input-group"
          onSubmit={(e) => {
            e.preventDefault();
            setCity(inputValue);
            fetchWeatherInfo(inputValue);
          }}
        >
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Tìm kiếm thành phố"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <select
          onChange={(e) => {
            changeMode(e.target.value);
          }}
          name="mode"
          className="form-select"
          style={{ width: 'fit-content' }}
        >
          <option value="metric">Metric (°C, km)</option>
          <option value="us">US (°F, miles)</option>
          <option value="uk">UK (°C, miles)</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            getCurrentCity();
            setInputValue('');
          }}
          className="btn btn-light rounded-pill border me-1"
        >
          <i className="bi bi-geo-alt-fill"></i>
        </button>
        {city}
      </div>
    </section>
  );
}
