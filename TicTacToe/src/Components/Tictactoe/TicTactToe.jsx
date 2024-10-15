import React, { useRef, useState } from 'react'
import './TicTactToe.css'
const TicTactToe = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""])
    const [count, setCount] = useState(0);
    const [winMsg, setwinMsg] = useState("Tic Tac Toe in React");
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null)


    const Toggle = (e, index) => {
        if (lock || data[index] != "") {
            return 0;
        }
        const newData = [...data]
        if (count % 2 == 0) {
            e.target.innerHTML = `X`;
            newData[index] = `X`;

        } else {
            e.target.innerHTML = `O`;
            newData[index] = `O`;

        }
        setData(newData)
        setCount(count + 1);
        checkWin(newData)
    }
    const checkWin = (currentData) => {
        console.log("Check winner");
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (currentData[a] && currentData[a] === currentData[b] && currentData[b] === currentData[c]) {
                Won(currentData[a]);
                return;
            }
            if (count === 8 && !lock) {
                setwinMsg("Its A Tie!!!!")
            }
        }

    }
    const Won = (winner) => {
        console.log("Won");

        setLock(true)
        setwinMsg(`Congratulations! ${winner} is winner`)


    }


    const handleReset = () => {
        setCount(0)
        setLock(false)
        setData(["", "", "", "", "", "", "", "", ""]);
        setwinMsg("Tic Tac Toe in react")
    }
    return (
        <div className='container'>
            <h1 ref={titleRef} className="title">{winMsg}</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => Toggle(e, 0)}>{data[0]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 1)}>{data[1]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 2)}>{data[2]}</div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => Toggle(e, 3)}>{data[3]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 4)}>{data[4]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 5)}>{data[5]}</div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => Toggle(e, 6)}>{data[6]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 7)}>{data[7]}</div>
                    <div className="boxes" onClick={(e) => Toggle(e, 8)}>{data[8]}</div>
                </div>
            </div>
            <button className="reset" onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default TicTactToe
