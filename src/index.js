import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.ceil(Math.random()*1000);

const greeting = userObj => (
    <div>
        <h1>Welcome {userObj.name}</h1>
        <h2 className="text-muted">Your lucky number is: {userObj.luckyNumber}</h2>
    </div>
);

const user = {
        name : "Jake",
        luckyNumber : luckyNumber()
};
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
