import { getDistanceString, getTemperatureString } from '../js/utils.js';

export default function CurrentWeather({ weatherInfo, mode }) {
  return (
    <section>
      <div className="content-wrapper">
        <div className=" bg-body-tertiary p-3 rounded-3">
          <b>
            <small>
              Thời tiết hiện tại{' '}
            </small>
          </b>
          <div className="d-sm-flex gap-3 align-items-center">
            <div className="flex-shrink-0">
              <div className="d-flex gap-1 align-items-center display-1">
                <img
                  src={`/assets/status/${weatherInfo.currentConditions.icon}.svg`}
                  alt=""
                  style={{ height: '1.8em' }}
                />
                <b>
                  {getTemperatureString(
                    mode,
                    weatherInfo.currentConditions.temp
                  )}
                </b>
              </div>
            </div>
            <div>
              <b>{weatherInfo.days[0].description}</b>
              <br />
              <small>
                Cảm thấy như{' '}
                {getTemperatureString(
                  mode,
                  weatherInfo.currentConditions.feelslike
                )}
              </small>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-5 g-0 g-sm-3">
            <div className="col">
              <small className="text-secondary">
                Gió&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              {getDistanceString(mode, weatherInfo.currentConditions.windspeed)}
              /giờ
            </div>
            <div className="col">
              <small className="text-secondary">
                Độ ẩm&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              {weatherInfo.currentConditions.humidity}%
            </div>
            <div className="col">
              <small className="text-secondary">
                Tầm nhìn&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              {getDistanceString(
                mode,
                weatherInfo.currentConditions.visibility
              )}
            </div>
            <div className="col">
              <small className="text-secondary">
                Áp suất&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              {weatherInfo.currentConditions.pressure}mb
            </div>
            <div className="col">
              <small className="text-secondary">
                Điểm sương&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              {weatherInfo.currentConditions.dew}°
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
