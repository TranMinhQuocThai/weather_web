export default function WeatherForecast() {
  return (
    <section className="content-wrapper">
      <h3>Dự báo trong 7 ngày tới</h3>
      <div className="container">
      <div className="row row-cols-lg-6 row-cols-md-4 row-cols-2" >
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Hôm nay</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/clear-day.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Ngày mai</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/rain.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Ngày mai</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/thunder.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Ngày mai</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/fog.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Ngày mai</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/snow.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='col p-2'>
          <div className='card'>
            <p className='card-title text-center'>Ngày mai</p>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <img src="/assets/status/wind.svg" alt="" style={{width:'50%'}} className='card-img'/>
            <div className='Temparature'>
            <h5 className='highest'>30<sup>o</sup>C</h5>
            <h5 className='lowest'>20<sup>o</sup>C</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
