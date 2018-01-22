import React from 'react';
import Stopwatch from './stopwatch';

export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="text-center">Stopwatch</h1>
                <Stopwatch/>
            </div>
        )
    }
}