class Tile{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    render(ctxt){
        // ctxt.fillStyle = "#0099FF";
        // ctxt.strokeStyle = "#000000";
        // ctxt.strokeRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }

    update(elapsedMiliseconds){

    }

    boundLeft(x, y1, y2){
        return false;
    }
    
    boundRight(x, y1, y2){
        return false;
    }

    boundTop(y, x1, x2){
        return false;
    }

    boundBottom(y, x1, x2){
        return false;
    }
}
