import React, {useState} from 'react';
import CellClass from "../../lib/CellClass";


const Cell = () => {
    const symbol: string = 'O';
    const totalNumberCells: number = 36;


    const createItems = () => {
        const symbolPosition = Math.floor(Math.random() * totalNumberCells);
        console.log(symbolPosition);
        const cells = [];
        let hasItem;
        for (let id = 1; id <= totalNumberCells; id++) {
            hasItem = id === symbolPosition;
            const CellObject = new CellClass(id, hasItem, false);
            cells.push(
                CellObject
            );
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

        if (cell.hasItem) {
            alert('You found symbol');
        }
    };


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