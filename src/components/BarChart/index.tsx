import Chart from 'react-apexcharts';
const BarChart= (props : any ) => {
    const options ={
        plotOptions:{
            bar:{
                horizontal: true,
            }
        },

    };
    const chartData = {
        labels:{
            categories:['Anakin', 'Barry Allen', 'Kal-El','Logan', 'Marie']
        },
        series: [
            {
                name: "%Sucesso",
                data: [43.6 ,67.1, 67.7 , 45.6 , 71.1]
            }
        ]
    }
    return(
        <div>
            <Chart
                options ={{...options, xaxis: chartData.labels}}
                series = {chartData.series }
                type = "bar"
                height = "240"
            />
            {props.usertext && <p> My text is {props.usertext} </p>}  
        </div>

    );
  
}
 export default BarChart;