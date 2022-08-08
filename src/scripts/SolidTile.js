class SolidTile extends Tile{
    constructor(x, y){
        super(x, y);
    }

    boundLeft(x, y1, y2){
        return (this.y < y1 && this.y + 1 > y1 || this.y < y2 && this.y + 1 > y2) && this.x < x;
    }
    
    boundRight(x, y1, y2){
        return (this.y < y1 && this.y + 1 > y1 || this.y < y2 && this.y + 1 > y2) && this.x + 1 > x;
    }

    boundTop(y, x1, x2){
        return (this.x < x1 && this.x + 1 > x1 || this.x < x2 && this.x + 1 > x2) && this.y < y;
    }

    boundBottom(y, x1, x2){
        return (this.x < x1 && this.x + 1 > x1 || this.x < x2 && this.x + 1 > x2) && this.y + 1 > y;
    }
}
