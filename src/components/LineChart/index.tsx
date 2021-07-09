import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';


type double = {
    point: number[]
}

type seriesData = {
    name: string,
    data: double[]
};
interface State {
    type: 'data' | 'stop' | 'span' | 'start' | '',
    timestamp: number,
    begin?: number,
    end?: number,
}


interface Series {

    name: string;
    data: number[]
}

const parsingSeries = (input: string): Series | null => {
    try {
        return JSON.parse(input)
    } catch (e) {
        console.error("The input provided is not a valid JSON", e)
    }
    return null
}

interface LineChartProps {
    usertext: string,
}

const LineChart = ({ usertext }: LineChartProps) => {
    

    const chartData = parsingSeries(usertext)

    console.log(chartData)
    /*
    useEffect(()=>{
        function updateText(){
          
        }
    },[chartData])
 
    */

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },

    };


    return (
        <div>
            {usertext ? <Chart
                options={options}
                series={[chartData]}
                type="line"
                height="240"
            /> : <p> Unable to render the chart since the input is not a valid JSON</p>}
            {usertext && <p> My text is {usertext} </p>}
        </div>
    );


}



export default LineChart;