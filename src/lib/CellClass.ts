
class CellClass {
    id: number;
    hasItem: boolean;
    clicked: boolean;

    static clickedCellCounter: number = 0;

    constructor(id:number, hasItem:boolean, clicked:boolean) {
        this.id = id;
        this.hasItem = hasItem;
        this.clicked = clicked;
    }
}

export default CellClass;