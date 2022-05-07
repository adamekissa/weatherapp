import img from "../../public/Img/art.jpg";
import Image from "next/dist/client/image";

function HourCard({data }) {
    console.log(data);
    return (
<div>
  <div className="col">
    <div className="card h-100">
        <Image  src={img} alt="weather4     "/>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"> Today the weather in  is mostly </p>
        <a href="#" className="btn btn-primary">See details</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    )}
  
    export default HourCard;