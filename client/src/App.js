import React from "react";
import "./App.css";
import Navbar from "./NavBar";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            footballers: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(players => {
                console.log(players);
                this.setState({ footballers: players });
            })
            .catch(err => console.log("Error fetching data"));
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <br />
                <ul>
                    {this.state.footballers.map(player => {
                        return (
                            <li className="player-card" key={player.id}>
                                <h2>Footballer Name: {player.name}</h2>
                                <p>Represents country: {player.country}</p>
                                <p># of times searched: {player.searches}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
