class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpeed = 0;
        this.ySpeed = 0;

        this.jumpAvailable = false;
    }

    moveLeft(){
        this.xSpeed -= PLAYER_VERTICAL_ACCELERATION
    }

    moveRight(){
        this.xSpeed += PLAYER_VERTICAL_ACCELERATION
    }

    jump(){
        if(this.jumpAvailable){
            this.ySpeed = PLAYER_JUMP_ACCELERATION;
            this.jumpAvailable = false;
        }
    }

    render(ctxt){
        ctxt.fillStyle = "#0099FF";
        ctxt.strokeStyle = "#000000";
        ctxt.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE * PLAYER_WIDTH, CELL_SIZE * PLAYER_HEIGHT);
    }

    update(elapsedMiliseconds, nearCells){
        this.x += elapsedMiliseconds * this.xSpeed;
        this.y += elapsedMiliseconds * this.ySpeed;

        this.ySpeed += GRAVITATION;

        this.xSpeed *= FRICTION;
        //this.ySpeed *= FRICTION;

        if(this.xSpeed < 0){
            if(nearCells[1][0].boundRight(this.x, this.y, this.y + PLAYER_HEIGHT)){
                this.x = nearCells[1][0].x + 1;
                this.xSpeed = 0;
            }
        }else if(this.xSpeed > 0){
            if(nearCells[1][2].boundLeft(this.x + PLAYER_WIDTH, this.y, this.y + PLAYER_HEIGHT)){
                this.x = nearCells[1][2].x - PLAYER_WIDTH;
                this.xSpeed = 0;
            }
        }

        if(this.ySpeed < 0){
            for(let i=0;i<3;i++){
                if(nearCells[0][i].boundBottom(this.y, this.x, this.x + PLAYER_WIDTH)){
                    this.y = nearCells[0][i].y + 1;
                    this.ySpeed = 0;
                }
            }
        }else if(this.ySpeed > 0){
            for(let i=0;i<3;i++){
                if(nearCells[2][i].boundTop(this.y + PLAYER_HEIGHT, this.x, this.x + PLAYER_WIDTH)){
                    this.y = nearCells[2][1].y - PLAYER_HEIGHT;
                    this.ySpeed = 0;
                    this.jumpAvailable = true;
                }
            }
        }
    }
}
