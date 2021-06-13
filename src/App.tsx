import NavBar from "components/NavBar";
import {useState} from 'react';
import Footer from "components/Footer";
import BarChart from "components/BarChart";
import DonutsChart from "components/DonutsChart";
import Formulario from "components/Formulario/index";

const App = () =>  {
   const  [usertext, updateText] = useState({}); 
    
  return (
  <>
    <NavBar/>
    
    <div className="container">
      
      <h1 className= "text-primary py-3"> Teste de Graficos  </h1>
      <div className="row px-3">
          <div className="col-sm-12">
          <Formulario updateText ={updateText}/>
          </div>
        </div>
      <div className=" row px-3">
        <div className=" col-sm-12">
          <h5 className="text-center text-secondary"> Bar Chart</h5>
          <BarChart usertext = {usertext}/>
        </div>
        <div className=" col-sm-12">
          <h5 className="text-center text-secondary"> Donuts Chart</h5>
          <DonutsChart/>
        </div>
      </div>

   
    </div>
    <Footer/>
  </>
  );
}

export default App;
