import React from 'react';

export default class FormatTime extends React.Component {
    constructor(props) {
        super(props);
        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
        };
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const {elapsed} = nextProps;
        const sec = elapsed / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        })
    }

    static leadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    static trailingZero(number) {
        return number < 10 ? `${number}0` : number;
    }

    render() {
        const {hour, min, sec, ms} = this.state;
        return (
            <div
                style={this.timerStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        )
    }
}