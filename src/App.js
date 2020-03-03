import React from "react";
import './common.scss';
import {CentralSection, OpponentDeck, YourDeck} from "./components/index";


const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            yourHand: [],
            opponentHand:[],
            deck: [],
            turn: 1
        };
        this.state = {};
        Object.assign(this.state, this.initialState);
    }


    generateDeck () {
        let cards = [];
        const suits = ['club', 'spades', 'heart', 'buba'];
        const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
        const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        for (let i = 0; i < 4; i++) {
            const suit = suits[i];
            for (let j = 0; j < 9; j++) {
                const value = values[j];
                const score = scores[j];
                const card = {
                    suit: suit,
                    value: value,
                    score: score
                };
                cards.push(card)
            }
        }
        console.table(cards);
        shuffleArray(cards);
        this.setState({
            deck: cards,
        })
    }


    componentDidMount() {
        this.generateDeck()
    }


    nextTurn () {
        const {turn} = this.state;
    }


    takeOne () {
        const {
            deck,
            yourHand
        } = this.state;
        const lastCard = deck.pop();
        this.setState({
            deck: deck,
            yourHand: [...yourHand, lastCard]
        }, this.checkWin);
    }


    checkWin () {
        const {
            yourHand
        } = this.state;
        if (this.countScore(yourHand) >= 21) {
            alert('Ну походу ты выиграл. Вообще я хз.');
            this.setState(this.initialState);
            this.generateDeck()
        }
    }


    countScore (cards) {
        let sum;
        if (cards.length >= 2) {
            sum = cards.reduce((a, b) => ({score: a.score + b.score})).score;
        } else if (cards.length) {
            sum = cards[0].score
        } else {
            sum = 0
        }
        return sum
    }


    render() {
        const {
            deck,
            yourHand,
        } = this.state;
        const score = this.countScore(yourHand);
        return (
            <>
                <OpponentDeck/>
                <CentralSection take={this.takeOne.bind(this)} deck={deck}/>
                <YourDeck yourHand={yourHand} countScore={score}/>
            </>
        );
    }
}


