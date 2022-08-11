const CELL_SIZE = 30;
const PLAYER_TOKEN = "@"
const CELL_CONTENTS = {
    "|": BoundTile,
    " ": AirTile,
    "o": GroundTile,
    "i": IceTile,
    "-": SemiSolidTile
}
const PLAYER_GOING_LEFT = 0;
const PLAYER_GOING_RIGHT = 1;
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
const PLAYER_RENDER_WIDTH = 0.95;
const PLAYER_HEIGHT = 0.9;
const GRAVITATION = 0.001;
const RENDER_MAX_SCALE = 2.5;
const PLAYER_TEXTURE_LEFT = new Image(PLAYER_WIDTH, PLAYER_HEIGHT);
PLAYER_TEXTURE_LEFT.src = "./images/PlayerLeft.png";
const PLAYER_TEXTURE_RIGHT = new Image(PLAYER_WIDTH, PLAYER_HEIGHT);
PLAYER_TEXTURE_RIGHT.src = "./images/PlayerRight.png";
const SEMI_SOLID_TILE_TEXTURE = new Image(CELL_SIZE, CELL_SIZE);
SEMI_SOLID_TILE_TEXTURE.src = "./images/SemiSolidTile.png";

let game;

window.onload = () => {
    game = new Game(
        document.getElementById("canvas")
    );

    game.run();
}
