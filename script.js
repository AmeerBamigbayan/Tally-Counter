let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let number = document.querySelector(".number");

add.addEventListener("click", addNumber);
minus.addEventListener("click", minusNumber);


function addNumber() {
    counternum = number.innerHTML;
  number.innerHTML = parseInt(counternum) + 1;
}

function minusNumber() {
    counternum = number.innerHTML;
  number.innerHTML = parseInt(counternum) - 1;
}