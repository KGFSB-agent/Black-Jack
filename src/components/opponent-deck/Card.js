import React from "react";
import "./styles.scss";
import card from "./media/card.jpg"


export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={card} alt="card"/>
            </div>
        );
    }
}