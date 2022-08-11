class SemiSolidTile extends SolidTile{
    constructor(x, y){
        super(x, y);
    }

    render(ctxt){
        ctxt.drawImage(SEMI_SOLID_TILE_TEXTURE, this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
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
