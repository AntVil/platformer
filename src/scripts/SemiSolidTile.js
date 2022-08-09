class SemiSolidTile extends SolidTile{
    constructor(x, y){
        super(x, y);
    }

    render(ctxt){
        ctxt.strokeStyle = "#000000";
        ctxt.beginPath();
        ctxt.moveTo(this.x * CELL_SIZE, this.y * CELL_SIZE);
        ctxt.lineTo((this.x + 1) * CELL_SIZE, this.y * CELL_SIZE);
        ctxt.stroke();
    }

    boundLeft(y, x1, x2){
        return false;
    }

    boundRight(y, x1, x2){
        return false;
    }

    boundBottom(y, x1, x2){
        return false;
    }

    getFriction(){
        return GROUND_FRICTION;
    }
}
