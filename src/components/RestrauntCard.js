// import { useState } from "react";
import { restraunts } from "./config";

const RestrauntCard = ({ name, image, cuisine, rating ,contact_number ,location}) =>{
    return(
      <div className="card">
        {/* {console.log(name)} */}
        <img src={image} alt="" />
        <div className="card_text">
        <h2>{name}</h2>
        <h3>{cuisine}</h3>
        <h4>{rating} stars</h4>
        <h5>{contact_number}</h5>
        <h6>{location}</h6>
        </div>
      </div>
    )
}

export default RestrauntCard;