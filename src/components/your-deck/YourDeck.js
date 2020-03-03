import React from "react";
import "./styles.scss";
import {Card} from "./Card";

export class YourDeck extends React.Component {
    render() {
        const {yourHand, countScore} = this.props;

        return (
            <>
                <div className='yourDeck'>
                    {yourHand.map((card, index) => (
                            <Card key={index} value={card.value} suit={card.suit}/>
                        )
                    )}
                    <div className="countScore">{countScore}/21</div>
                </div>
            </>
        );
    }
}