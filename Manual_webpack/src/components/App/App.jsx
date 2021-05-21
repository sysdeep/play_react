import React, { Component, useState } from "react";

import './App.css';

import Clicker from "../Clicker/Clicker"




class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
				<p>lala</p>
				<Clicker />
            </div>
        );
    }
}

export default App;