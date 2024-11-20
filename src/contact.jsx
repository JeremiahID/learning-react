import React from "react";
import Images from "./img";
import Parag from "./paragraphs";


function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <Images img = {props.img}/>
            <Parag tel = {props.tel} email = {props.email}/>
        </div>
    )
};

export default Card;