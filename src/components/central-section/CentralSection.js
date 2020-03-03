import React from "react";
import "./styles.scss";
import {Card} from "./Card";

export class CentralSection extends React.Component {
    render() {
        const {
            deck,
            take
        } = this.props;
        return (
            <div className="central">
                <div className="buttons-wrapper">
                    <div className="buttons">
                        <button onClick={() => {
                            take();
                            // turn()
                        }} className="plus">+</button>
                        <button className="pass">pass</button>
                    </div>
                </div>
                <div className="deck-wrapper">
                    <div className="counter"> {deck.length}/36</div>
                    <div className="deck">
                        {[...Array(6).keys()].map((_, index) => (
                            <Card key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
