var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

function storeState() {
  localStorage.setItem("count", count);
}

addButton.addEventListener("click", function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    storeState();
  }
});

subtractButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    storeState();
  }
});
