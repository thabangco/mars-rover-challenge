const fs = require("fs");
const Rover = require("./rover");
const inputCommands = require("./input");

function app() {
  const fileContent = fs.readFileSync("./app/instructions.txt", "utf8");
  const roverCommands = inputCommands.processCommand(fileContent);

  roverCommands.forEach(function (row) {
    const rover = new Rover();

    rover.position = row.initialPosition;
    rover.orientationStr = row.initialOrientation;
    rover.instructions = row.instructions;
    rover.map = row.mapData;
    rover.executeInstructions();

    console.log(`\x1b[93m${rover.formattedPosition()}\x1b[0m`);
  });
}
console.log(`\x1b[32mRESULTS: \x1b[0m`);
app();
console.log(`\x1b[32m______ \x1b[0m`);

module.exports = { app };
