let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementEl = document.getElementById("increment-btn");
let decrementEl = document.getElementById("decrement-btn");
let submitEl = document.getElementById("submit-btn");
let count = 0;

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener(
  "click",
  (decrement = () => {
    count--;
    countEl.textContent = count;
  })
);

submitEl.addEventListener("click", submit);

function increment() {
  count++;
  countEl.textContent = count;
}

function submit() {
  let countStr = count + " ; ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}
