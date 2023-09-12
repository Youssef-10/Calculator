let signs = document.querySelectorAll(".sign");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let equal = document.querySelector(".equal");
let screen = document.querySelector(".screen");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (screen.value.length < 14) {
      screen.value += number.innerHTML;
    }
  });
});

operators.forEach((opr) => {
  opr.addEventListener("click", (e) => {
    if (screen.value.length < 14) {
      if (e.target.innerHTML === "X") {
        screen.value += "*";
      } else {
        screen.value += opr.innerHTML;
      }
    }
  });
});

equal.addEventListener("click", () => {
  if (
    screen.value.includes("*") ||
    screen.value.includes("/") ||
    screen.value.includes("+") ||
    screen.value.includes("-") ||
    screen.value.includes("%")
  ) {
    // let re = /[^\d|\.]?\d+[^\d|\.]\d+/;
    screen.value = eval(screen.value);
  }
});

signs[0].addEventListener("click", () => {
  // empty the screen
  screen.value = "";
});
signs[1].addEventListener("click", () => {
  // remove last element in the screen
  let output = screen.value.split("");
  output.pop();
  screen.value = output.join("");
});
