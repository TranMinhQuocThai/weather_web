export default function Header() {
  return (
    <section className="content-wrapper d-flex gap-1">
      <a className="flex-shrink-0 me-1" href="">
        <img
          src="/assets/logo.svg"
          alt=""
          style={{ height: '2em' }}
        />
      </a>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm thành phố"
        />
        <button
          className="btn btn-primary"
          type="button"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-light border dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          ℃
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item">Độ Celcius ℃</button>
          </li>
          <li>
            <button className="dropdown-item">Độ Farenheit °F</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
