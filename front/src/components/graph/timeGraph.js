import ReactApexChart from "react-apexcharts";

const TimeGraph = (props) => {
  const data = props.data;
  //도넛 차트 데이터 및 옵션
  const donutData = {
    series: [
      {
        name: "",
        data: [12, 9, 7, 3], //data.morning, data.afternoon, data.night, data.dawn
      },
    ],
    labels: ["Fantasy", "Crime", "SF", "Sport"],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Fantasy", "Crime", "SF", "Sport"],
      },
      title: {
        text: "",
        align: "center",
      },
      fill: {
        colors: ["#827397"],
      },
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={donutData.options}
          series={donutData.series}
          type="bar"
          width="400"
        />
      </div>
    </div>
  );
};

export default TimeGraph;
