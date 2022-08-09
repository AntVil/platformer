class IceTile extends SolidTile{
    constructor(x, y){
        super(x, y);
    }

    render(ctxt){
        ctxt.fillStyle = "#0099FF";
        ctxt.strokeStyle = "#00FF00";
        ctxt.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }

    getFriction(){
        return ICE_FRICTION;
    }
}
