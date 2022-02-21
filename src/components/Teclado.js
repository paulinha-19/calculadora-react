import React, { Component } from 'react';

class Teclado extends Component {
    handleTargetNameClick = (e) => {
        this.props.onClick(e.target.name);
    }
    render() {
        return (
            <div className="container-buttons">
                <div className='buttons-content'>
                    <button className='red-operator-color' name="C" onClick={this.handleTargetNameClick}>C</button>
                    <button className='green-operator-color' name="(" onClick={this.handleTargetNameClick}>(</button>
                    <button className='green-operator-color' name=")" onClick={this.handleTargetNameClick}>)</button>
                    <button className='green-operator-color' name="+" onClick={this.handleTargetNameClick}>+</button>
                    <button name="1" onClick={this.handleTargetNameClick}>1</button>
                    <button name="2" onClick={this.handleTargetNameClick}>2</button>
                    <button name="3" onClick={this.handleTargetNameClick}>3</button>
                    <button className='green-operator-color' name="-" onClick={this.handleTargetNameClick}>-</button>
                    <button name="4" onClick={this.handleTargetNameClick}>4</button>
                    <button name="5" onClick={this.handleTargetNameClick}>5</button>
                    <button name="6" onClick={this.handleTargetNameClick}>6</button>
                    <button className='green-operator-color' name="/" onClick={this.handleTargetNameClick}>÷</button>
                    <button name="7" onClick={this.handleTargetNameClick}>7</button>
                    <button name="8" onClick={this.handleTargetNameClick}>8</button>
                    <button name="9" onClick={this.handleTargetNameClick}>9</button>
                    <button className='green-operator-color' name="*" onClick={this.handleTargetNameClick}>x</button>
                    <button name="0" onClick={this.handleTargetNameClick}>0</button>
                    <button name="." onClick={this.handleTargetNameClick}>.</button>
                    <button className='red-operator-color' name="CE" onClick={this.handleTargetNameClick}>CE</button>
                    <button className='green-operator-color' name="=" onClick={this.handleTargetNameClick}>=</button>
                    <button className='green-operator-color' name="%" onClick={this.handleTargetNameClick}>%</button>
                    <button className='green-operator-color' name="+/-" onClick={this.handleTargetNameClick}>+/-</button>
                </div>
            </div>
        );
    }
}


export default Teclado;