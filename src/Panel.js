import axios from 'axios';
import React, { Component } from 'react';

export class Panel extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
        };
    }

    loadCardsFromServer = () => {
        axios.get('/cards.json')
            .then((response) => {
                this.setState(response.data);
            })
            .catch((error) => {
                alert("Cannot read card details from server." + "\n\n" + error);
            });
    }

    componentDidMount() {
        this.loadCardsFromServer();
    }

    render() {
        const listItems = this.state.cards.map((card) =>

            <div key={card.title} className="col-auto mb-4">
                <a href={card.url} >
                    <div className="card panel-card" style={{ color: card.color}} >
                        <div className="card-body">
                            <h5 className="card-title"><span class={"mdi " + card.icon + " h2"} >  </span>{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                </a>
            </div>

        );

        return (
            <div >
                <div className="jumbotron">
                    <h1><span class={"mdi " + this.state.icon + " h1"}></span> {this.state.title}</h1>
                    <h5>{this.state.description}</h5>
                </div>
                <div className="container mt-4" >
                    <div className="row justify-content-center">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }



}
