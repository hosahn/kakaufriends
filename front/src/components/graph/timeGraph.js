import ReactApexChart from "react-apexcharts";

const TimeGraph = (props) => {
  const data = props.data;
  //도넛 차트 데이터 및 옵션
  const donutData = {
    series: [
      {
        name: "작성 일기 수 ",
        data: [data.morning, data.afternoon, data.night, data.dawn], //data.morning, data.afternoon, data.night, data.dawn
      },
    ],
    labels: ["아침", "점심", "저녁", "새벽"],
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
        categories: ["아침", "점심", "저녁", "새벽"],
      },
      title: {
        text: "",
        align: "left",
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
