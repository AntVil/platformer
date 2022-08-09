class Game{
    constructor(canvas){
        this.renderHandler = new RenderHandler(canvas, this);
        this.inputHandler = new InputHandler(this);
        
        this.gameMap = new GameMap(this.inputHandler);

        this.gameMap.loadMap(
            [
                "                                           ",
                "                                           ",
                "                                           ",
                "                                           ",
                "                                           ",
                "         ooo  iii  oooooooo                ",
                "           o-         ooo    ---           ",
                "o @      o o          ooo          ---ooooo",
                "oooo---ooooooo------ooooo               ooo"
            ]
        );
    }

    run(){
        let lastLooped;

        const loop = () => {
            let elapsedMiliseconds = new Date() - lastLooped;
            
            this.update(elapsedMiliseconds);
            this.render();
            
            lastLooped = new Date();
            requestAnimationFrame(loop);
        }
        
        lastLooped = new Date();
        requestAnimationFrame(loop);
    }

    update(elapsedMiliseconds){
        this.gameMap.update(elapsedMiliseconds);
    }

    render(){
        let ctxt = this.renderHandler.getContext(
            ...this.gameMap.getPlayerPosition(),
            ...this.gameMap.getMapSize(),
        );

        this.gameMap.render(ctxt);
    }
}
