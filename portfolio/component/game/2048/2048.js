import React, {useState, useEffect} from "react"
import Block from "./block"

import cloneDeep from 'lodash/cloneDeep';
import styles from "./2048.module.scss"
import {useEvent} from "./utils";

const Game2048 = () => {

    const UP = 38;
    const DOWN = 40;
    const LEFT = 37;
    const RIGHT = 39;
    const [gameOver, setGameOver] = useState(false);
    const [data, setData] = useState([
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],
        [0, 0, 0, 0,],
    ]);
    const initialise = () => {
        let newGrid = cloneDeep(data)
        addnumber(newGrid)
        addnumber(newGrid)
        setData(newGrid)
    }
    const addnumber = (newGrid) => {
        let added = false;
        let gridFull = false;
        let attempts = 0;
        while (!added) {
            if (gridFull) {
                break;
            }

            let rand1 = Math.floor(Math.random() * 4);
            let rand2 = Math.floor(Math.random() * 4);
            attempts++;
            if (newGrid[rand1][rand2] === 0) {
                newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
                added = true;
            }
            if (attempts > 50) {
                gridFull = true;
            }
        }
    };
    const swipeLeft = (dummy) => {
        let oldGrid = data;
        let newArray = cloneDeep(data);

        for (let i = 0; i < 4; i++) {
            let b = newArray[i];
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast++;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
            addnumber(newArray);
        }
        if (dummy) {
            return newArray;
        } else {
            setData(newArray);
        }
    };
    const swipeRight = (dummy) => {
        let oldData = data;
        let newArray = cloneDeep(data);

        for (let i = 3; i >= 0; i--) {
            let b = newArray[i];
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast--;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
            addnumber(newArray);
        }
        if (dummy) {
            return newArray;
        } else {
            setData(newArray);
        }
    };
    const swipeDown = (dummy) => {
        let b = cloneDeep(data);
        let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 3; i >= 0; i--) {
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        if (JSON.stringify(b) !== JSON.stringify(oldData)) {
            addnumber(b);
        }
        if (dummy) {
            return b;
        } else {
            setData(b);
        }
    };
    const swipeUp = (dummy) => {
        let b = cloneDeep(data);
        let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < 4; i++) {
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        if (JSON.stringify(oldData) !== JSON.stringify(b)) {
            addnumber(b);
        }
        if (dummy) {
            return b;
        } else {
            setData(b);
        }
    };

    const checkIfGameOver = () => {
        console.log("CHECKING GAME OVER");
        let checker = swipeLeft(true);
        if (JSON.stringify(data) !== JSON.stringify(checker)) {
            return false;
        }
        let checker2 = swipeDown(true);
        console.table(data);
        console.table(checker2);
        if (JSON.stringify(data) !== JSON.stringify(checker2)) {
            return false;
        }
        let checker3 = swipeRight(true);
        if (JSON.stringify(data) !== JSON.stringify(checker3)) {
            return false;
        }
        let checker4 = swipeUp(true);
        if (JSON.stringify(data) !== JSON.stringify(checker4)) {
            return false;
        }
        return true;
    };
    const HandleKeyDown = (e) => {
        if (gameOver) {
            return;
        }
        switch (e.keyCode) {
            case UP:
                swipeUp();
                break;
            case DOWN:
                swipeDown();
                break;
            case RIGHT:
                swipeRight();
                break;
            case LEFT:
                swipeLeft();
                break;

            default:
                break
        }
        let gameOverr = checkIfGameOver();
        if (gameOverr) {
            setGameOver(true);
        }

    }
    const resetGame = () => {
        setGameOver(false);
        const emptyGrid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        addnumber(emptyGrid);
        addnumber(emptyGrid);
        setData(emptyGrid);
    };
    useEffect(() => {
        initialise()
    }, [])
    useEvent("keydown", HandleKeyDown)

    return (
        <div className={styles.block}>
        {gameOver && <div className={styles.gameOver}>  C'est mort </div> }
            {data.map((row, oneIndex) => {
                return (
                    <div className={styles.row} key={oneIndex}>
                        {row.map((digit, index) => {
                            return (
                                <div>
                                    <Block num={digit} key={index}/>
                                </div>
                            )
                        })}
                    </div>
                );
            })}
            <div className={styles.reset} onClick={()=>resetGame()}> New game </div>

        </div>
    )
}
export default Game2048