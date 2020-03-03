import React from "react";
import "./styles.scss";
import Buba from './media/Buba.png';
import Club from './media/Club.png';
import Heart from './media/Heart.png';
import Spades from './media/Spades.png';
import CardJPG from './media/card.jpg';


export class Card extends React.Component {
    render() {
        const {
            suit,
            value
        } = this.props;
        const suitType = {
            buba: Buba,
            club: Club,
            heart: Heart,
            spades: Spades
        };
        const suitImg = suitType[suit];
        const colorType = {
            buba: 'red',
            club: 'black',
            heart: 'red',
            spades: 'black'
        };
        const style = {
            color: colorType[suit]
        };
        return (
                <div className="card">
                    <div style={style} className='valueTop'>{value}</div>
                    <div style={style} className='valueBottom'>{value}</div>
                    <div className="centerer">
                        <img className='centralSuit' src={suitImg} alt={suit}/>
                    </div>
                    <img className="cardBase" src={CardJPG} alt="card"/>
                    <img className='leftSuit' src={suitImg} alt={suit}/>
                    <img className='rightSuit' src={suitImg} alt={suit}/>
                </div>
        );
    }
}