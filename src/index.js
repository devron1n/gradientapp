import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button className="main-form__button" type="submit">GO</button>
        );
    }
}

class Input extends React.Component {
    render() {
        return (
            <input className="main-form__input" name={this.props.name} value={this.props.color} onChange={this.props.onChange} placeholder={this.props.prevColor} pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" required title="Цвет в шестнадцатеричном виде, например #8e2ad6 или #80d"></input>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form className="main-form" onSubmit={this.props.onSubmit}>
                <h1 className="main-form__title">Смешай краски</h1>
                <label className="main-form__label">Первый цвет</label>
                <Input name="firstColor" color={this.props.firstColor} onChange={this.props.onChange} prevColor={this.props.prevFirstColor} />
                <label className="main-form__label">Второй цвет</label>
                <Input name="secondColor" color={this.props.secondColor} onChange={this.props.onChange} prevColor={this.props.prevSecondColor} />
                <Button />
            </form>
        );
    };
}

class GradientApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            prevFirstColor: '#00ffff',
            prevSecondColor: '#ff0000',
            firstColor: '',
            secondColor: '',
            bgStyle: {
                backgroundImage: `linear-gradient(135deg, #00ffff, #ff0000)`,
            },
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const firstColor = this.state.firstColor;
        const secondColor = this.state.secondColor;
        //let deg = Math.floor(Math.random() * 360);
        this.setState({
            prevFirstColor: firstColor,
            prevSecondColor: secondColor,
            firstColor: '',
            secondColor: '',
            bgStyle: {
                backgroundImage: `linear-gradient(135deg, ${firstColor}, ${secondColor})`,
            },
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div
                className="background" 
                style={this.state.bgStyle} 
            >
                <Form 
                    onSubmit={this.handleSubmit} 
                    onChange={this.handleChange}
                    firstColor={this.state.firstColor}
                    secondColor={this.state.secondColor}
                    prevFirstColor={this.state.prevFirstColor}
                    prevSecondColor={this.state.prevSecondColor}
                />
            </div>
        );
    };
}

//===========================
ReactDOM.render(
    <GradientApp />, 
    document.getElementById('root')
);