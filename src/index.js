import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            page: "Что то с чем то"
        };
    }

    render() {
        
    
    return (
        <>
            {this.state.page}
        </>
    );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))