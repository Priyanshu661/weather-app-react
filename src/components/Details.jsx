import React from "react";


function Details(props){

return (<div className="card shadow-0 border">
<div className="card-body p-4">

  <h4 className="mb-1 sfw-normal">{props.weatherDetails.city}</h4><br></br>
  <p className="mb-2">Current temperature: <strong>{props.weatherDetails.currentTemp}</strong></p>
  <p>Feels like: <strong>{props.weatherDetails.feelsLike}</strong></p>
  <p>Max: <strong>{props.weatherDetails.max}</strong>, Min: <strong>{props.weatherDetails.min}</strong></p>

  <div className="d-flex flex-row align-items-center">
    <p className="mb-0 me-4">{props.weatherDetails.description}</p>
    <i className="fas fa-cloud fa-3x" style={{color: "#eee"}}></i>
  </div>

</div>
</div>
)






}


export default Details