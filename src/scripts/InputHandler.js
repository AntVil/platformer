class InputHandler{
    constructor(game){
        this.game = game;

        this.pressedKeys = new Set();

        document.addEventListener("keydown", (e) => {
            this.pressedKeys.add(e.key.toLowerCase());
        });

        document.addEventListener("keyup", (e) => {
            this.pressedKeys.delete(e.key.toLowerCase());
        });
    }

    pressingUp(){
        return this.pressedKeys.has("w") || this.pressedKeys.has(" ") || this.pressedKeys.has("arrowup");
    }
    
    pressingLeft(){
        return this.pressedKeys.has("a") || this.pressedKeys.has("arrowleft");
    }

    pressingDown(){
        return this.pressedKeys.has("s") || this.pressedKeys.has("arrowdown");
    }

    pressingRight(){
        return this.pressedKeys.has("d") || this.pressedKeys.has("arrowright");
    }
}