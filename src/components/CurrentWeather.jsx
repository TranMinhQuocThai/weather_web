export default function CurrentWeather() {
  return (
    <section>
      <div className="content-wrapper">
        <div className="mb-1">
          <button className="btn btn-light rounded-pill border me-1">
            <i className="bi bi-geo-alt-fill"></i>
          </button>
          Ho Chi Minh
        </div>
        <div className=" bg-body-tertiary p-3 rounded-3">
          <b>
            <small>Thời tiết hiện tại</small>
          </b>
          <div className="d-sm-flex gap-3 align-items-center">
            <div>
              <div className="d-flex gap-1 align-items-center display-1">
                <img
                  src="/assets/status/partly-cloudy-day.svg"
                  alt=""
                  style={{ height: '1.8em' }}
                />
                <b>28°C</b>
              </div>
            </div>
            <div>
              <b>Nhiều mây</b>
              <br />
              <small>Cảm thấy như 32°C</small>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-sm-5 g-0 g-sm-3">
            <div className="col">
              <small className="text-secondary">
                Gió&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />7 km/giờ
            </div>
            <div className="col">
              <small className="text-secondary">
                Độ ẩm&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              72%
            </div>
            <div className="col">
              <small className="text-secondary">
                Tầm nhìn&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              10km
            </div>
            <div className="col">
              <small className="text-secondary">
                Áp suất&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              1012mb
            </div>
            <div className="col">
              <small className="text-secondary">
                Điểm sương&nbsp;
                <i className=" bi bi-info-circle"></i>
              </small>
              <br />
              19
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
