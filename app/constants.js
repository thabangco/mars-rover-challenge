const COMPASS = {
  // Compass: NORTH, EAST, SOUTH, WEST
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

const DIRECTIONS = {
  // Directions: LEFT, RIGHT, MOVE
  LEFT: "L",
  RIGHT: "R",
  MOVE: "M",
};

const COMPASS_ABBR = {
  // Compass short code: N, E, S, W
  N: COMPASS.NORTH,
  E: COMPASS.EAST,
  S: COMPASS.SOUTH,
  W: COMPASS.WEST,
};

const DIRECTIONS_ABBR = {
  // Directions short code: L, R, M
  L: DIRECTIONS.LEFT,
  R: DIRECTIONS.RIGHT,
  M: DIRECTIONS.MOVE,
};

module.exports = {
  COMPASS,
  DIRECTIONS,
  COMPASS_ABBR,
  DIRECTIONS_ABBR,
};
