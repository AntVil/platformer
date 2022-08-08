class GameMapCell{
    constructor(x, y, mapStringChar){
        this.x = x;
        this.y = y;

        try{
            this.content = new CELL_CONTENTS[mapStringChar](this.x, this.y);
        }catch{
            this.content = new AirTile(this.x, this.y);
        }
    }

    render(ctxt){
        this.content.render(ctxt);
    }

    update(elapsedMiliseconds){
        this.content.update(elapsedMiliseconds);
    }

    boundLeft(x, y1, y2){
        return this.content.boundLeft(x, y1, y2);
    }
    
    boundRight(x, y1, y2){
        return this.content.boundRight(x, y1, y2);
    }

    boundTop(y, x1, x2){
        return this.content.boundTop(y, x1, x2);
    }

    boundBottom(y, x1, x2){
        return this.content.boundBottom(y, x1, x2);
    }
}
