import Image from "next/dist/client/image";
import img from "./../../public/Img/art.jpg"

function Card( {data ,time, temp, fl} ) {
  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days"
  }
  const hrs = msToTime(time);
  // console.log(data)
  // const s = data.hourly;
  // const t = s.map((hourly) => { return hourly.dt})
  // console.log(t)
    return (
<div>
  <div className="col">
    <div className="card h-100">
      <Image src={img} alt="weather" />
      <div className="card-body">
        <h5 className="card-title">Time : {hrs}</h5>
        <p className="card-text"> The temperature is {temp} but it feels like {fl} </p>
        <a href="#" className="btn btn-primary">See details</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    )}
  
    export default Card;