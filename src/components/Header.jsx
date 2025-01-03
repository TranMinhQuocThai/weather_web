import React, { useEffect, useState } from 'react';
import Select from 'react-select';

// Cities List
const citys = [
  { value: 'an-giang', label: 'An Giang' },
  { value: 'ba-ria-vung-tau', label: 'Bà Rịa - Vũng Tàu' },
  { value: 'bac-giang', label: 'Bắc Giang' },
  { value: 'bac-kan', label: 'Bắc Kạn' },
  { value: 'bac-lieu', label: 'Bạc Liêu' },
  { value: 'bac-ninh', label: 'Bắc Ninh' },
  { value: 'ben-tre', label: 'Bến Tre' },
  { value: 'binh-dinh', label: 'Bình Định' },
  { value: 'binh-duong', label: 'Bình Dương' },
  { value: 'binh-phuoc', label: 'Bình Phước' },
  { value: 'binh-thuan', label: 'Bình Thuận' },
  { value: 'ca-mau', label: 'Cà Mau' },
  { value: 'can-tho', label: 'Cần Thơ' },
  { value: 'cao-bang', label: 'Cao Bằng' },
  { value: 'da-nang', label: 'Đà Nẵng' },
  { value: 'dak-lak', label: 'Đắk Lắk' },
  { value: 'dak-nong', label: 'Đắk Nông' },
  { value: 'dien-bien', label: 'Điện Biên' },
  { value: 'dong-nai', label: 'Đồng Nai' },
  { value: 'dong-thap', label: 'Đồng Tháp' },
  { value: 'gia-lai', label: 'Gia Lai' },
  { value: 'ha-giang', label: 'Hà Giang' },
  { value: 'ha-nam', label: 'Hà Nam' },
  { value: 'ha-noi', label: 'Hà Nội' },
  { value: 'ha-tinh', label: 'Hà Tĩnh' },
  { value: 'hai-duong', label: 'Hải Dương' },
  { value: 'hai-phong', label: 'Hải Phòng' },
  { value: 'hau-giang', label: 'Hậu Giang' },
  { value: 'hoa-binh', label: 'Hòa Bình' },
  { value: 'ho-chi-minh', label: 'Tp. Hồ Chí Minh' },
  { value: 'hung-yen', label: 'Hưng Yên' },
  { value: 'khanh-hoa', label: 'Khánh Hòa' },
  { value: 'kien-giang', label: 'Kiên Giang' },
  { value: 'kon-tum', label: 'Kon Tum' },
  { value: 'lai-chau', label: 'Lai Châu' },
  { value: 'lam-dong', label: 'Lâm Đồng' },
  { value: 'lang-son', label: 'Lạng Sơn' },
  { value: 'lao-cai', label: 'Lào Cai' },
  { value: 'long-an', label: 'Long An' },
  { value: 'nam-dinh', label: 'Nam Định' },
  { value: 'nghe-an', label: 'Nghệ An' },
  { value: 'ninh-binh', label: 'Ninh Bình' },
  { value: 'ninh-thuan', label: 'Ninh Thuận' },
  { value: 'phu-tho', label: 'Phú Thọ' },
  { value: 'phu-yen', label: 'Phú Yên' },
  { value: 'quang-binh', label: 'Quảng Bình' },
  { value: 'quang-nam', label: 'Quảng Nam' },
  { value: 'quang-ngai', label: 'Quảng Ngãi' },
  { value: 'quang-ninh', label: 'Quảng Ninh' },
  { value: 'quang-tri', label: 'Quảng Trị' },
  { value: 'soc-trang', label: 'Sóc Trăng' },
  { value: 'son-la', label: 'Sơn La' },
  { value: 'tay-ninh', label: 'Tây Ninh' },
  { value: 'thai-binh', label: 'Thái Bình' },
  { value: 'thai-nguyen', label: 'Thái Nguyên' },
  { value: 'thanh-hoa', label: 'Thanh Hóa' },
  { value: 'thua-thien-hue', label: 'Thừa Thiên Huế' },
  { value: 'tien-giang', label: 'Tiền Giang' },
  { value: 'tra-vinh', label: 'Trà Vinh' },
  { value: 'tuyen-quang', label: 'Tuyên Quang' },
  { value: 'vinh-long', label: 'Vĩnh Long' },
  { value: 'vinh-phuc', label: 'Vĩnh Phúc' },
  { value: 'yen-bai', label: 'Yên Bái' },
];

export default function Header({ fetchWeatherInfo, changeMode }) {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');

  async function getCurrentCity(abortController = AbortController.prototype) {
    if (!navigator.geolocation) {
      setCity('Tp. Hồ Chí Minh');
      return;
    }
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        try {
          let url = `http://1api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=88d8c3a16490d6e5ba6e293820f3a903`;
          const response = await fetch(url, { signal: abortController.signal });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
          setCity(data[0].name);
          fetchWeatherInfo(data[0].name);
        } catch (error) {
          if (error instanceof DOMException) {
            return;
          }
          console.error(error);
          setCity('Tp. Hồ Chí Minh');
          fetchWeatherInfo('ho-chi-minh');
        }
      },
      (err) => {
        if (err.PERMISSION_DENIED) {
          alert('Hãy bật truy cập vị trí');
        }
      }
    );
  }

  useEffect(() => {
    if (city.length != 0) {
      return;
    }
    const abortController = new AbortController();
    getCurrentCity(abortController);
    return () => {
      abortController.abort();
    };
  }, [city]);

  return (
    <section className="content-wrapper">
      <div className="d-flex flex-column flex-sm-row gap-1 mb-2">
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
        <div style={{ flex: 1 }}>
          {/* stp */}
          <Select
            options={citys}
            value={{ value: search, label: city }}
            // Hàm cập nhật thành phố dựa vào lựa chọn
            onChange={(selectOption) => {
              // setCity({value: selectOption.value, label: selectOption.label});
              setCity(selectOption.label);
              setSearch(selectOption.value);
              // lay du lieu thoi tiet
              fetchWeatherInfo(selectOption.value);
            }}
            placeholder="Tỉnh/Thành phố"
          />
        </div>
        <select
          onChange={(e) => {
            changeMode(e.target.value);
          }}
          name="mode"
          className="form-select bg-light"
          style={{ width: 'fit-content' }}
        >
          <option value="metric">Metric (°C, km)</option>
          <option value="us">US (°F, miles)</option>
          <option value="uk">UK (°C, miles)</option>
        </select>
      </div>
      <div className="d-sm-flex justify-content-between">
        <div>
          <i className="bi bi-geo-alt-fill"></i> Vị trí: {city}
        </div>
        <button
          onClick={() => {
            setCity('');
          }}
          className="btn btn-light border me-1"
        >
          <i className="bi bi-crosshair"></i> Lấy vị trí hiện tại
        </button>
      </div>
    </section>
  );
}
