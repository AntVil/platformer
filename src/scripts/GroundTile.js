class GroundTile extends SolidTile{
    constructor(x, y){
        super(x, y);
    }

    render(ctxt){
        ctxt.fillStyle = "#999999";
        ctxt.strokeStyle = "#00FF00";
        ctxt.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
}
