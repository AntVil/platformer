const CELL_SIZE = 30;
const PLAYER_TOKEN = "@"
const CELL_CONTENTS = {
    "|": BoundTile,
    " ": AirTile,
    "o": GroundTile
}
const FRICTION = 0.8;
const PLAYER_VERTICAL_ACCELERATION = 0.0015;
const PLAYER_JUMP_ACCELERATION = -0.015;
const PLAYER_WIDTH = 0.7;
const PLAYER_HEIGHT = 0.9;
const GRAVITATION = 0.001;

let game;

window.onload = () => {
    game = new Game(
        document.getElementById("canvas")
    );

    game.run();
}
