import React from "react";
import Images from "./img";


function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <Images />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
};

export default Card;