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
    const coverDiv:HTMLElement = document.querySelector('.cover') as HTMLElement;

    const resetCells = () => {
        setIsReset(true);
        setClickedCellCounter(0);
        coverDiv.style.display = 'none';
    };

    const handleResetComplete = () => {
        setIsReset(false);
    };


    const css: React.CSSProperties = {
        position: "absolute",
        width: "100%",
        height:"100%",
        zIndex: "100",
        display: "none"
    };

    const wrapperDiv = <div className="cover" style={css}></div>

    return (
        <div>
            {wrapperDiv}
            <Cell updateClickedCellCounter={updateClickedCellCounter} isReset={isReset} resetCells={handleResetComplete} />
            <Counter counter={clickedCellCounter} />
            <Reset resetCells={resetCells} />
        </div>
    );
};

export default PlayBoard;