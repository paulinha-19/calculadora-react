import './App.css';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Teclado from "./components/Teclado";
import React, { Component } from 'react';

class App extends Component {
  state = {
    result: ""
  }
  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "C") {
      this.reset()
    }
    else if (button === "+/-") {
      this.changeSign();
    }
    else if (button === "CE") {
      this.backspace()
    }
    else if (button === "%") {
      this.porcentage();
    }
    else {
      let { result } = this.state
      this.setState({
        result: result + button
      })
    }
  };
  divideByZero = () => {
    let { result } = this.state
    if(result / 0){
      this.setState({
        result: "Não é possível dividir por zero"
      })
    }
  }
  calculate = () => {
    let { result } = this.state
    try {
      this.setState({
        result: (eval(result) || "") + "" //eval(result)=>"x +-*/% y"
      })
    } catch (e) {
      this.setState({
        result: "ERRO"
      })
      throw e;
    }
  };
  porcentage = () => {
    let { result } = this.state;
    this.setState({
      result: result / 100
    });
  }
  changeSign = () => {
    let { result } = this.state;
    if (result > 0) {
      this.setState({
        result: -result
      })
    } else {
      this.setState({
        result: (Math.abs(result))
      });
    }
  }
  reset = () => {
    this.setState({
      result: ""
    })
  };
  backspace = () => {
    let { result } = this.state;
    this.setState({
      result: result.slice(0, -1)
    })
  };
  render() {
    return (
        <div className="container-body">
          <Header />
          <Resultado result={this.state.result} />
          <Teclado onClick={this.onClick} />
        </div>
    );
  }
}
export default App;