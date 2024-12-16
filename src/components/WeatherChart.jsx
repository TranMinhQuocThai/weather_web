import { Line } from 'react-chartjs-2';
import { data } from './data';
console.log(data);
data.days[0].hours.map((hour) => {
  return hour;
});

export default function WeatherChart() {
  return (
    <section className="content-wrapper">
      <h3>Biểu đồ nhiệt độ</h3>
      <Line
        data={{
          labels: data.days[0].hours.map((hour) => {
            return hour.datetime;
          }),
          datasets: [
            {
              label: 'Nhiệt độ',
              data: data.days[0].hours.map((hour) => {
                return hour.temp;
              }),
              borderWidth: 1,
              borderColor: '#FF6283',
              backgroundColor: '#FFB1C0',
              fill: 'start',
            },
          ],
        }}
        options={{
          plugins: {
            filler: {
              propagate: false,
            },
          },
          interaction: {
            intersect: false,
          },
        }}
      />
    </section>
  );
}
