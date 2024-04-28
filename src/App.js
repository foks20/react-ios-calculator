import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Footer from './Footer';

function App() {

  const [displayValue, setDisplayValue] = useState("");

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [currentOp, setCurrentOp] = useState("");

  const keypad = [
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+']
  ];

  const keypadFooter = ['0', null, '.', '='];

  const doDivision = () => {
    return (parseInt(b) / parseInt(a)).toString()
  }

  const doSum = () => {
    
    return (parseInt(b) + parseInt(a)).toString()
  }

  const doSubtraction = () => {
    return (parseInt(b) - parseInt(a)).toString()
  }

  const doMultiplication = () => {
    return (parseInt(b) * parseInt(a)).toString()
  }

  const doClear = () => {
    setA("");
    setB("");
    setResult("");
    setDisplayValue("");
    setCurrentOp("");
  }

  const operators = {
    '÷': doDivision,
    '+': doSum,
    '-': doSubtraction,
    'x': doMultiplication
  }

  const handleButtonClick = (e) => {
    const val = e.target.innerText;
    console.log("a button was clicked")
    if (val === "=") {
      handleEqualsClick();
      return;
    } else if (val === 'C') {
      
      doClear();
      return;
    }
   
    else if (val in operators) {
      console.log("an oepration button was clicked")
      setCurrentOp(val)
      return;
    }

    // handle other edge cases here
    // ...
  
    // set A
    if (currentOp !== "") {
      console.log("if statement")
      setA(a + val);
      setDisplayValue(a + val);
    }
    // set B
    else {
      console.log("else statement")
      setB(b + val);
      setDisplayValue(b + val);
    }
  }

  const getUUID = () => {
    return uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  }

  const handleEqualsClick = () => {
    console.log("equals was clicked");

    const opFunction = operators[currentOp]; // this is the function we want to call

    const result = opFunction();
    setDisplayValue(result);
    setA("");
    setB(result);
    // find out which button was clicked
  }

  // 1. user enters sequence of numbers, that get set to a
  // 2. user presses operator symbol which sets currentOp
  // 3. user enters sequence of numbers, that get set to b
  // 4. user enters equal sign, which then sets result (a and b are no longer visible and get shifted over  a <--- result, so does currentOp)

  // e.1 percent or minus/plus clicked 
  // e.2 clear actually sets a and b to "" and currentOp to ""

// 13/1 gives a decimal
//13-1 gives a negative number

  return (
    <div className="App">

      <div className='calculator'>

        {/*  text display */}
        <div className='text-display'>
          {displayValue}
        </div>

        <table className='keypad'>
          <tbody>

            {/* main buttons */}
            {keypad.map((elem, i) => (
              <tr key={getUUID()}>
                {elem.map((label, j) =>
                  <td key={getUUID()}>
                    <button
                      className={j === 3 ? 'orange-btn' : 'light-gray-btn'}
                      onClick={(e) => handleButtonClick(e)}
                    >{label}</button>
                  </td>
                )}
              </tr>
            )
            )}

            {/* bottom buttons */}
            <tr>
              <Footer
                keypadFooter={keypadFooter}
                handleButtonClick={handleButtonClick}

              />
            </tr>
          </tbody>

        </table>

      </div>


    </div>
  );
}

export default App;
