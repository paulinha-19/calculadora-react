import React, { useState } from 'react';
import './css/Calculadora.css';

const Calculadora = () => {
    const [num, setNum] = useState(0); //primeiro numero
    const [oldNum, setOldNum] = useState(0); // segundo numero
    const [operator, setOperator] = useState(); //operador

    const inputNum = (e) => {
        let input = e.target.value;
        if (num === 0) { //ternário
            setNum(input);
        } else {
            setNum(num + input);
        }
    }
    const clear = () => {
        setNum();
    }
    const porcentage = () => {
        setNum(num / 100);
    }
    const changeSign = () => {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }
    const operatorHandler = (e) => {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }
    const calculate = () => {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            console.log(oldNum)
            console.log(num)
            console.log(oldNum - num)
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }
    const backspace = () => {
        oldNum.slice (0, -1);
    }
    return (
        <div>
            <div className="wrapper">
                <h1 className="result">{num}</h1>
                <button onClick={clear}>C</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>
                <button className="orange" onClick={operatorHandler} value="/">
                    /
                </button>
                <button className="gray" onClick={inputNum} value={7}>
                    7
                </button>
                <button className="gray" onClick={inputNum} value={8}>
                    8
                </button>
                <button className="gray" onClick={inputNum} value={9}>
                    9
                </button>
                <button className="orange" onClick={operatorHandler} value="X">
                    X
                </button>
                <button className="gray" onClick={inputNum} value={4}>
                    4
                </button>
                <button className="gray" onClick={inputNum} value={5}>
                    5
                </button>
                <button className="gray" onClick={inputNum} value={6}>
                    6
                </button>
                <button className="orange" onClick={operatorHandler} value="-">
                    -
                </button>
                <button className="gray" onClick={inputNum} value={1}>
                    1
                </button>
                <button className="gray" onClick={inputNum} value={2}>
                    2
                </button>
                <button className="gray" onClick={inputNum} value={3}>
                    3
                </button>
                <button className="orange" onClick={operatorHandler} value="+">
                    +
                </button>
                <button className="gray" onClick={inputNum} value={0}>
                    0
                </button>
                <button className="gray" onClick={inputNum} value={"."}>
                    ,
                </button>
                <button className="gray" onClick={backspace} value={"CE"}>
                    CE
                </button>
                <button className="orange" onClick={calculate}>
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculadora