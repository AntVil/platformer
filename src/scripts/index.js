const CELL_SIZE = 30;
const PLAYER_TOKEN = "@"
const CELL_CONTENTS = {
    "|": BoundTile,
    " ": AirTile,
    "o": GroundTile,
    "i": IceTile,
    "-": SemiSolidTile
}
const AIR_FRICTION = 0.95;
const GROUND_FRICTION = 0.7;
const ICE_FRICTION = 1;
const PLAYER_VERTICAL_ACCELERATION = 0.0015;
const PLAYER_JUMP_ACCELERATION = -0.01;
const PLAYER_AFTER_JUMP_ACCELERATION = -0.001
const PLAYER_AFTER_JUMP_ACCELERATION_MILISECONDS = 300;
const PLAYER_JUMP_REQUEST_MILISECONDS = 100;
const PLAYER_JUMP_OFF_GROUND_REQUEST_MILISECONDS = 300;
const PLAYER_VERTICAL_MAX_SPEED = 0.01;
const PLAYER_WIDTH = 0.7;
const PLAYER_HEIGHT = 0.9;
const GRAVITATION = 0.001;
const RENDER_MAX_SCALE = 2.5;

let game;

window.onload = () => {
    game = new Game(
        document.getElementById("canvas")
    );

    game.run();
}
