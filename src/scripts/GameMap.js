class GameMap{
    constructor(inputHandler){
        this.inputHandler = inputHandler;
        this.player = new Player(0, 0);
        this.map = [];

        this.pressedUpLastFrame = false;
    }

    loadMap(mapStringArray){
        this.map = [];
        for(let y=0;y<mapStringArray.length;y++){
            let row = [];
            for(let x=0;x<mapStringArray[y].length;x++){
                row.push(new GameMapCell(x, y, mapStringArray[y][x]));
                if(mapStringArray[y][x] === PLAYER_TOKEN){
                    this.player = new Player(x + (1 - PLAYER_WIDTH) / 2, y + (1 - PLAYER_HEIGHT));
                }
            }
            this.map.push(row);
        }
    }

    render(ctxt){
        for(let row of this.map){
            for(let cell of row){
                cell.render(ctxt);
            }
        }

        this.player.render(ctxt);
    }

    update(elapsedMiliseconds){
        for(let row of this.map){
            for(let cell of row){
                cell.update(elapsedMiliseconds);
            }
        }
        
        if(this.inputHandler.pressingLeft()){
            this.player.moveLeft();
        }

        if(this.inputHandler.pressingRight()){
            this.player.moveRight();
        }

        if(this.inputHandler.pressingUp()){
            if(!this.pressedUpLastFrame){
                this.player.jump();
            }
            this.pressedUpLastFrame = true;
        }else{
            this.player.stopJump();
            this.pressedUpLastFrame = false;
        }

        let x = Math.floor(this.player.x + PLAYER_WIDTH / 2);
        let y = Math.floor(this.player.y + PLAYER_HEIGHT / 2);
        let nearCells = [];
        for(let i=-1;i<2;i++){
            let row = [];
            for(let j=-1;j<2;j++){
                let x_ = x+j;
                let y_ = y+i;
                if(x_ >= 0 && x_ < this.map[0].length){
                    if(y_ >= 0 && y_ < this.map.length){
                        row.push(this.map[y_][x_]);
                    }else{
                        row.push(new GameMapCell(x_, y_, " "));
                    }
                }else{
                    row.push(new GameMapCell(x_, y_, "|"));
                }
            }
            nearCells.push(row);
        }

        this.player.update(elapsedMiliseconds, nearCells);
    }

    getMapSize(){
        return [this.map[0].length, this.map.length];
    }
    
    getPlayerPosition(){
        return [this.player.x, this.player.y];
    }
}
