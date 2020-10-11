const { calculateOrientation, calculatePosition } = require("./utils");
const constants = require("./constants");
const COMPASS = constants.COMPASS;
const DIRECTIONS = constants.DIRECTIONS;
const COMPASS_ABBR = constants.COMPASS_ABBR;

class Rover {
  constructor() {
    this.is__position = { x: 0, y: 0 };
    this.is__orientation = COMPASS.NORTH;
    this.is__map = { x: 8, y: 8 };
    this.is__instructions = [];
  }

  get instructions() {
    return this.is__instructions;
  }

  set instructions(instructions) {
    this.is__instructions = instructions;
  }

  get orientation() {
    return this.is__orientation;
  }

  set orientation(orientation) {
    this.is__orientation = orientation;
  }

  get orientationStr() {
    return Object.keys(COMPASS_ABBR).find(
      (o) => COMPASS_ABBR[o] === this.is__orientation
    );
  }

  set orientationStr(orientationStr) {
    if (orientationStr in Object.keys(COMPASS_ABBR)) {
      console.log("error", orientationStr, ":::");
      throw "orientation not known";
    }

    this.is__orientation = COMPASS_ABBR[orientationStr];
  }

  get position() {
    return this.is__position;
  }

  set position(position) {
    this.is__position = position;
  }

  get map() {
    return this.is__map;
  }

  set map(map) {
    this.is__map = map;
  }

  formattedPosition() {
    return `${this.position.x} ${this.position.y} ${this.orientationStr}`;
  }

  executeInstructions() {
    this.instructions.forEach((instruction) => {
      if (instruction == DIRECTIONS.LEFT || instruction === DIRECTIONS.RIGHT) {
        const newOrientation = calculateOrientation(
          this.orientation,
          instruction
        );
        this.orientation = newOrientation;
        return;
      }

      const newPosition = calculatePosition(
        this.orientation,
        this.position,
        this.map
      );
      this.position = newPosition;
    });
  }
}

module.exports = Rover;
