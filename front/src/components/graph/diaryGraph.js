import ReactApexChart from "react-apexcharts";

const DiaryGraph = (props) => {
  //도넛 차트 데이터 및 옵션
  const donutData = {
    series: [35, 33, 20, 12],
    options: {
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: "Total",
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "white",
              },
              value: {
                fontSize: "22px",
                show: true,
                color: "white",
              },
            },
          },
        },
      },
      title: {
        text: "",
        align: "left",
      },
      labels: ["일기장", "인터넷", "기타", "일기 안씀"],
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={donutData.options}
          series={donutData.series}
          type="donut"
          width="400"
        />
      </div>
    </div>
  );
};

export default DiaryGraph;
