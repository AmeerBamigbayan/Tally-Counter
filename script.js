let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");
let number = document.querySelector(".number");

add.addEventListener("click", addNumber);
minus.addEventListener("click", minusNumber);
reset.addEventListener("click", resetNumber);


function addNumber() {
    counternum = number.innerHTML;
  number.innerHTML = parseInt(counternum) + 1;
}

function minusNumber() {
    counternum = number.innerHTML;
    if (counternum == 0) {
        return false
    }
  number.innerHTML = parseInt(counternum) - 1;
}

function resetNumber() {
    number.innerHTML = 0;
}