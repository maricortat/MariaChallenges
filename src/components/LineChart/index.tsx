import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';


type double = {
    point: number[]
}

type seriesData = {
    name:string,
    data:double[]
};
interface State{
    type:'data'|'stop'| 'span'|'start'|'',
    timestamp: number,
    begin? : number,
    end?: number,
}
const BarChart= (props : any ) => {
    
    const [usertext, uptadeText] = useState<seriesData[]>([]);


    useEffect(()=>{
        function updateText(){
          
        }
    },[])

    const options ={
        plotOptions:{
            bar:{
                horizontal: true,
            }
        },

    };
    
    const chartData = {        
        series: [{usertext}],

    
    }; 
      
  
      
  return(
        <div>
            <Chart
                options ={options}
                series = {chartData.series }
                type = "line"
                height = "240"
            />
            {usertext && <p> My text is {JSON.stringify(usertext)}  </p>}  
            
        </div>          
    );
  
}
 export default BarChart;