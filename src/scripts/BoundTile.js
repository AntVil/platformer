class BoundTile extends SolidTile{
    constructor(x, y){
        super(x, y);
    }

    boundTop(y, x1, x2){
        return false;
    }

    boundBottom(y, x1, x2){
        return false;
    }
}