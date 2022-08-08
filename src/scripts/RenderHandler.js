class RenderHandler{
    constructor(canvas, game){
        this.game = game;
        this.canvas = canvas;
        this.ctxt = this.canvas.getContext("2d");

        new ResizeObserver((x) => this.resetCanvasSize()).observe(this.canvas);
    }

    getContext(){
        this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);

        return this.ctxt;
    }

    resetCanvasSize(){
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.ctxt = this.canvas.getContext("2d");
        this.game.render();
    }
}
