import ReactApexChart from "react-apexcharts";

const SocialGraph = (props) => {
  const donutData = {
    series: [
      {
        name: "작성 일기 수 ",
        data: [10, 30, 70, 120], //data.morning, data.afternoon, data.night, data.dawn
      },
    ],
    labels: ["2018", "2019", "2020", "2021"],
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
        categories: ["2018", "2019", "2020", "2021"],
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

export default SocialGraph;
