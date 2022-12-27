import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./Details";


function App(){

    const [weatherDetails,setWeatherDetails]=useState({
        city:"",
        currentTemp:"",
        feelsLike:"",
        max:"",
        min:"",
        description:""
    })

    const [cityName,setCityName]=useState("");

    const [isChecked,setIsChecked]=useState(false);



    
    function kelvinToCelsius(kelvin) {
        return Math.trunc(kelvin - 273.15);
    }
    

    

    function getLocation(){
      setIsChecked(true)

      var api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b2f9e4bb27bfc083104bc577befb0993#`
        

        fetch(api)
        .then((res)=>res.json())
        .then((json)=>setWeatherDetails({
            city:json.name,
            currentTemp:kelvinToCelsius(json.main.temp),
            feelsLike:kelvinToCelsius(json.main.feels_like),
            max:kelvinToCelsius(json.main.temp_max),
            min:kelvinToCelsius(json.main.temp_min),
            description:json.weather[0].description
        }))


        setCityName("")
    }



    function handleChange(event){
        const {value}=event.target;


        setCityName(value)


    }

   
   

   
    


    return (
        <div>
        <Header/>





         <section className="vh-100">

  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>

        <div className="input-group rounded mb-3">
          <input value={cityName} onChange={handleChange} type="search" className="form-control rounded" placeholder="City" aria-label="Search"
            aria-describedby="search-addon" />
          <a href="#!" type="button">
            <span onClick={getLocation} className="input-group-text border-0 fw-bold" id="search-addon">
              Check!
            </span>
          </a>
        </div>

        {/* <div className="mb-4 pb-2">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
              value="option1" checked />
            <label className="form-check-label" for="inlineRadio1">Celsius</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
              value="option2" />
            <label className="form-check-label" for="inlineRadio2">Farenheit</label>
          </div>
        </div> */}

{isChecked &&  <Details weatherDetails={weatherDetails}/>}


       

      </div>
    </div>

  </div>
</section>
      
        <Footer/>

        </div>
    )}

    export default App;