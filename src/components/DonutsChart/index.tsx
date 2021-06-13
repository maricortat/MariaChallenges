import Chart from 'react-apexcharts';
const DonutsChart = () => {
    const options ={
        legend:{
            show: true
        }
    }
    const chartData = {
        series: [477138, 499928 , 444867, 220426, 473088],
        labels : ['Anakin', 'Barry Allen', 'Kal-El','Logan', 'Marie']
        
    }
    return(
      <Chart
        options ={{...options, labels: chartData.labels}}
        series = {chartData.series }
        type = "donut"
        height = "240"
        />

    );
  
}
 export default DonutsChart;