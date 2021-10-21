import React from "react";

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="pic" className="carding"/>
                <span className="cardcate">{props.title}</span>
                <h3 className="cardtitle">{props.sname}</h3>
                <a href={props.link} target="blank">
                    <button>Watch NOW</button>
                </a>
            </div>
            </div> 
        </>
    );
}

export default Card;