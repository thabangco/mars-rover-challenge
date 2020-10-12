### mars-rover-challenge

###### tech used

nodejs, javascript for app

jest for testing

##### instructions

###### first, you will need to clone this repo

```
$ gh repo clone thabangco/mars-rover-challenge
```

or

```
$ git clone https://github.com/thabangco/mars-rover-challenge.git
```

###### open command line in the directory

###### run npm install to install project dependencies

```
$ npm install
```


###### modify (add, remove, edit) rover commands from the `app/instructions.txt` file

###### input:

> 8 8
>
> 1 2 E
>
> MMLMRMMRRMML


###### start the project

```
$ npm start
```

###### output:

> 3 3 S

###### run testCases

```
$ npm test
```

###### challenges faced
The instructions were clear on the expected output.

###### design
Given the problem statement, I assumed the first line of input is the upper-right coordinates of the plateau, which could only be as large as 9,9. I assumed the lower-left coordinates are assumed to be 0,0. The rover must remain within these boundries.

Based on the sample input, I assumed the second line gives the rover's position, and the third line is a series of instructions directing the rover how to explore the plateau.
The position has two integers and a letter separated by spaces, and corresponds to the x and y co-ordinates and the rover's orientation.

OOP, DRY, SOLID, TDD design pattern
```
app
  ├── app.js
  ├── constants.js
  ├── input.js
  ├── instructions.js
  ├── rover.js
  └── utils.js
tests
  ├── calculateOrientation.test.js // app/utils
  ├── calculatePosition.test.js // app/utils
  └── rover.test.js
 ```

