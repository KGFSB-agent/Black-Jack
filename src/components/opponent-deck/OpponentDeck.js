import React from "react";
import "./styles.scss";
import {Card} from "./Card";

export class OpponentDeck extends React.Component {
    render() {
        return (
            <div className="deck">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

