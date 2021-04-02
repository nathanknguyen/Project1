// Functions are like tools
function hammer(item) {
  for (var i = 0; i < 3; i++) {
    console.log("Hit the " + item + "!");
  }
  console.log(item + " is hammered in.");
}

function screwdriver(item) {
  for (var i = 0; i < 3; i++) {
    console.log("Twist the " + item + "!");
  }
  console.log(item + " is screwed in.");
}

// that you can use on your own...
hammer("nail");

// ...or hand to another function to use
function carpenter(tool, item) {
  console.log("The carpenter is going to work!");
  tool(item);
}

carpenter(hammer, "nail");
carpenter(screwdriver, "screw");

// Functions don't have to have a name
function microwave(item, timeInMilliseconds) {
  console.log(item + " is cooking...");

  setTimeout(function () {
    console.log(item + " is all done!");
  }, timeInMilliseconds);
}

microwave("popcorn", 10000);
