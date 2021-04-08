var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  console.log("changing blue!");
  event.currentTarget.setAttribute("style", "background-color: blue");
}

function changePurple(event) {
  // event.stopPropagation();
  console.log("changing purple!");
  event.currentTarget.setAttribute("style", "background-color: #601A4A");
}

function changeOrange(event) {
  // event.stopPropagation();
  console.log("changing orange!");
  event.currentTarget.setAttribute(
    "style",
    "background-color: #EE442F; color: white;"
  );
}

outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);
