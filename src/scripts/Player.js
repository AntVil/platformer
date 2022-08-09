class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xSpeed = 0;
        this.ySpeed = 0;

        this.groundTouchedElapsedMiliseconds = PLAYER_JUMP_REQUEST_MILISECONDS;
        this.jumpRequestElapsedMiliseconds = PLAYER_JUMP_OFF_GROUND_REQUEST_MILISECONDS;
        this.jumpElapsedMiliseconds = PLAYER_AFTER_JUMP_ACCELERATION_MILISECONDS;

        this.jumping = false;
    }

    moveLeft(){
        this.xSpeed = Math.max(this.xSpeed - PLAYER_VERTICAL_ACCELERATION, -PLAYER_VERTICAL_MAX_SPEED);
    }

    moveRight(){
        this.xSpeed = Math.min(this.xSpeed + PLAYER_VERTICAL_ACCELERATION, PLAYER_VERTICAL_MAX_SPEED);
    }

    jump(){
        this.jumpRequestElapsedMiliseconds = 0;
    }

    stopJump(){
        this.jumping = false;
    }

    render(ctxt){
        ctxt.fillStyle = "#0099FF";
        ctxt.strokeStyle = "#000000";
        ctxt.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE * PLAYER_WIDTH, CELL_SIZE * PLAYER_HEIGHT);
    }

    update(elapsedMiliseconds, nearCells){
        this.jumpRequestElapsedMiliseconds += elapsedMiliseconds;
        this.groundTouchedElapsedMiliseconds += elapsedMiliseconds;
        this.jumpElapsedMiliseconds += elapsedMiliseconds;

        this.x += elapsedMiliseconds * this.xSpeed;
        this.y += elapsedMiliseconds * this.ySpeed;

        this.ySpeed += GRAVITATION;

        this.xSpeed *= AIR_FRICTION;

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
                    
                    this.xSpeed *= nearCells[2][i].getFriction();
                    
                    this.groundTouchedElapsedMiliseconds = 0;
                }
            }
        }

        if(this.jumpRequestElapsedMiliseconds < PLAYER_JUMP_REQUEST_MILISECONDS){
            if(this.groundTouchedElapsedMiliseconds < PLAYER_JUMP_OFF_GROUND_REQUEST_MILISECONDS){
                this.ySpeed = PLAYER_JUMP_ACCELERATION;
                
                // prevent jump after jumping
                this.jumpRequestElapsedMiliseconds = PLAYER_JUMP_REQUEST_MILISECONDS;
                this.groundTouchedElapsedMiliseconds = PLAYER_JUMP_OFF_GROUND_REQUEST_MILISECONDS;

                this.jumping = true;
                this.jumpElapsedMiliseconds = 0;
            }
        }

        if(this.jumping && this.jumpElapsedMiliseconds < PLAYER_AFTER_JUMP_ACCELERATION_MILISECONDS){
            // console.log(this.jumpElapsedMiliseconds / PLAYER_AFTER_JUMP_ACCELERATION_MILISECONDS);
            this.ySpeed += PLAYER_AFTER_JUMP_ACCELERATION * (1 - this.jumpElapsedMiliseconds / PLAYER_AFTER_JUMP_ACCELERATION_MILISECONDS);
        }
    }
}
