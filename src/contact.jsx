import React from "react";


function Card(props){
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img 
                src={props.img} 
                alt="celebrity" 
            />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
};

export default Card;