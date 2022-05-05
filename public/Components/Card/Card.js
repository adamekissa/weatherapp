import img from "../../Images/weatherforec.jpg";
import City from "../../../pages/City/City";

function Card( {city, weather, key} ) {
    return (
<div>
  <div class="col">
    <div class="card h-100">
      <img src="../../Images/art.jpg" class="card-img-top" alt="Weather Icon"/>
      <div class="card-body">
        <h5 class="card-title">{city}</h5>
        <p class="card-text"> Today the weather in {city} is mostly {weather}</p>
        <a href="#" class="btn btn-primary">See details</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    )}
  
    export default Card;