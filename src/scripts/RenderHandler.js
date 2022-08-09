class RenderHandler{
    constructor(canvas, game){
        this.game = game;
        this.canvas = canvas;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.ctxt = this.canvas.getContext("2d");

        window.onresize = () => this.resetCanvasSize()
    }

    getContext(playerX, playerY, mapWidth, mapHeight){
        this.ctxt.setTransform(1, 0, 0, 1, 0, 0);
        this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let scale = Math.trunc(Math.max(
            this.canvas.width / (mapWidth * CELL_SIZE),
            this.canvas.height / (mapHeight * CELL_SIZE),
            RENDER_MAX_SCALE
        ) * 10) / 10;
        
        this.ctxt.setTransform(
            scale,
            0,
            0,
            scale,
            Math.round(Math.max(Math.min(-playerX * CELL_SIZE * scale + this.canvas.width/2, 0), -mapWidth * CELL_SIZE * scale + this.canvas.width)),
            Math.round(Math.max(Math.min(-playerY * CELL_SIZE * scale + this.canvas.height/2, 0), -mapHeight * CELL_SIZE * scale + this.canvas.height)),
        );

        return this.ctxt;
    }

    resetCanvasSize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctxt = this.canvas.getContext("2d");
        this.game.render();
    }
}
