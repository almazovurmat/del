import React, {useState} from 'react';
import Cell from "./Cell";
import Counter from "../Counter/Counter";
import CellClass from "../../lib/CellClass";
import Reset from "../Reset/Reset";

const PlayBoard = () => {
    const [clickedCellCounter, setClickedCellCounter] = useState(CellClass.clickedCellCounter);
    const updateClickedCellCounter = () => {
        setClickedCellCounter(CellClass.clickedCellCounter);
    };

    const [isReset, setIsReset] = useState(false);

    const resetCells = () => {
        setIsReset(true);
        setClickedCellCounter(0);
    };

    const handleResetComplete = () => {
        setIsReset(false);
    };


    return (
        <div>
            <Cell updateClickedCellCounter={updateClickedCellCounter} isReset={isReset} resetCells={handleResetComplete} />
            <Counter counter={clickedCellCounter} />
            <Reset resetCells={resetCells} />
        </div>
    );
};

export default PlayBoard;