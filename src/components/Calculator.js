// Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

// Importa el componente YouTubeVideo
import YouTubeVideo from './YouTubeVideo';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (number) => {
        if (displayValue === '0' || displayValue === 'Error') {
            setDisplayValue(number.toString());
        } else {
            setDisplayValue(displayValue + number.toString());
        }
    };

    const handleOperatorClick = (op) => {
        if (!isNaN(displayValue)) {
            if (operator !== null && op !== '=') {
                calculateResult();
            }
            setOperator(op);
            setPreviousValue(parseFloat(displayValue));
            if (op === 'C') {
                setDisplayValue('0');
                setPreviousValue(null);
                setOperator(null);
            } else if (op !== '=') {
                setDisplayValue('');
            }
        }
    };

    const calculateResult = () => {
        if (previousValue !== null && operator !== null) {
            const currentValue = parseFloat(displayValue);
            let result;

            switch (operator) {
                case '+':
                    result = previousValue + currentValue;
                    break;
                case '-':
                    result = previousValue - currentValue;
                    break;
                case '*':
                    result = previousValue * currentValue;
                    break;
                case '/':
                    if (currentValue === 0) {
                        setDisplayValue('Error');
                    } else {
                        result = previousValue / currentValue;
                    }
                    break;
                default:
                    break;
            }

            if (!isNaN(result)) {
                setDisplayValue(result.toString());
                setPreviousValue(result);
                setOperator(null);
            } else {
                setDisplayValue('Error');
                setPreviousValue(null);
                setOperator(null);
            }
        }
    };

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="buttons">
                <div className="button-row">
                    <button onClick={() => handleNumberClick(7)}>7</button>
                    <button onClick={() => handleNumberClick(8)}>8</button>
                    <button onClick={() => handleNumberClick(9)}>9</button>
                    <button onClick={() => handleOperatorClick('+')}>+</button>
                    <button onClick={() => handleOperatorClick('-')}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleNumberClick(4)}>4</button>
                    <button onClick={() => handleNumberClick(5)}>5</button>
                    <button onClick={() => handleNumberClick(6)}>6</button>
                    <button onClick={() => handleOperatorClick('*')}>*</button>
                    <button onClick={() => handleOperatorClick('/')}>/</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleNumberClick(1)}>1</button>
                    <button onClick={() => handleNumberClick(2)}>2</button>
                    <button onClick={() => handleNumberClick(3)}>3</button>
                    <button onClick={() => handleOperatorClick('C')}>C</button>
                    <button onClick={calculateResult}>=</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleNumberClick(0)}>0</button>
                </div>
            </div>
            {/* Agrega el componente YouTubeVideo a la derecha */}
            <YouTubeVideo />
        </div>
    );
}

export default Calculator;
