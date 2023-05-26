import React, {useState} from 'react';
import Cell from "./Cell";
import Counter from "../Counter/Counter";
import CellClass from "../../lib/CellClass";

const PlayBoard = () => {
    const [clickedCellCounter, setClickedCellCounter] = useState(CellClass.clickedCellCounter);
    const updateClickedCellCounter = () => {
        setClickedCellCounter(CellClass.clickedCellCounter);
    };

    return (
        <div>
            <Cell updateClickedCellCounter={updateClickedCellCounter} />
            <Counter counter={clickedCellCounter} />
        </div>
    );
};

export default PlayBoard;