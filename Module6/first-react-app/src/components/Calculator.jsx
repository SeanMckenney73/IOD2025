import { useState } from "react";

function Calculator(){


    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)

    const [result, setResult] = useState(0)

    const handleAddition = (e) => {
        e.preventDefault()
        setResult(Number(firstNumber) + Number(secondNumber))
    }

        const handleSubtraction = (e) => {
        e.preventDefault()
        setResult(Number(firstNumber) - Number(secondNumber))
    }

        const handleMultiplication = (e) => {
        e.preventDefault()
        setResult(Number(firstNumber) * Number(secondNumber))
    }

        const handleDivision = (e) => {
        e.preventDefault()
        setResult(Number(firstNumber) / Number(secondNumber))
    }



    return(
        <div className="Calculator componentBox">
            <form>
            <div className="formRow">
            <input type="number" value={firstNumber} name="firstNumber" onChange={(e) => setFirstNumber(e.target.value)} />
        </div>
        <div className="formRow">
            <input type="number" value={secondNumber} name="secondNumber" onChange={(e) => setSecondNumber(e.target.value)} />
        </div>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
        <p>{result}</p>
            </form>
        </div>
    )
}

export default Calculator