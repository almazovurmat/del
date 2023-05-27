import React, {useEffect, useState} from 'react';
import CellClass from "../../lib/CellClass";

interface IProps {
    updateClickedCellCounter: () => void;
    isReset: boolean;
    resetCells: () => void;
}

const Cell: React.FC<IProps> = ({updateClickedCellCounter, isReset, resetCells}) => {
    const symbol: string = 'O';
    const totalNumberCells: number = 36;

    const createItems = () => {
        const symbolPosition = Math.floor(Math.random() * totalNumberCells);
        // console.log(symbolPosition);
        const cells = [];
        let hasItem;
        for (let id = 1; id <= totalNumberCells; id++) {
            hasItem = id === symbolPosition;
            cells.push((new CellClass(id, hasItem, false)));
        }
        return cells;
    }

    const [cells, setCells] = useState<CellClass[]>(createItems());

    const openCell = (cell: CellClass) => {
        const cellCopy = {
            ...cell,
            clicked: true
        }
        const cellsCopy = [...cells];
        cellsCopy[cellCopy.id - 1] = cellCopy;
        setCells(cellsCopy);
        CellClass.clickedCellCounter++;
        updateClickedCellCounter();

        if (cell.hasItem) {
            alert('Congratulations! You found symbol.');
        }
    };


    useEffect(() => {
        if (isReset) {
            setCells(createItems());
            CellClass.clickedCellCounter = 0;
            resetCells();
        }
    }, [isReset, resetCells]);


    return (
        <div className="cells">
            {cells.map(cell => {
                return (
                    <div
                        key={cell.id}
                        className={`cell ${cell.clicked && cell.hasItem ? 'found' : ''} ${cell.clicked ? 'wrongCell' : ''}`}
                        onClick={() => openCell(cell)}
                    >
                        {cell.hasItem && cell.clicked ? symbol : cell.id}
                    </div>
                )
            })}
        </div>
    );
};

export default Cell;