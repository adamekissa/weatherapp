

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
  console.log(time);
    return (
<div>
  <div class="col">
    <div class="card h-100">
      <img src="./art.jpg" class="card-img-top" alt="Weather Icon"/>
      <div class="card-body">
        <h5 class="card-title">Time : {hrs}</h5>
        <p class="card-text"> The temperature is {temp} but it feels like {fl} </p>
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