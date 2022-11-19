import ReactApexChart from 'react-apexcharts';

const EmotionGraph = (props) => {
  const data = props.data;

  //도넛 차트 데이터 및 옵션
  const donutData = {
    series: [
      data.happy,
      data.sad,
      data.angry,
      data.surprised,
      data.unrest,
      data.normal,
    ], // data.happy, data.sad, data.angry
    options: {
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            // hollow: {
            //   margin: 15,
            //   size: '70%',
            //   image: '../../css/images/a-icon.jpg',
            //   imageWidth: 64,
            //   imageHeight: 64,
            //   imageClipped: false
            // },
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: 'Total',
                fontSize: '20px',
                fontFamily: 'fantasy',
                color: '#916bbf',
              },
              value: {
                fontSize: '22px',
                show: true,
                colors: ['#f68b42'], // 표 색상 지정
              },
            },
            fill: {
              colors: [
                '#FFEC99',
                '#A5D8FF',
                '#FFD6A5',
                '#CED4DA',
                '#FFADAD',
                '#D8F5A2',
              ],
            },
          },
        },
      },
      title: {
        text: '',
        align: 'left',
      },
      labels: ['행복', '슬픔', '화남', '놀람', '불안', '보통'],
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

export default EmotionGraph;
