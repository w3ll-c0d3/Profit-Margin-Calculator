var netProfit = document.getElementById("profit-text");
let margin = document.querySelector("#margin");
let marginForm = document.querySelector(".margin-form");
let cost = document.querySelector("#cost");

marginForm.addEventListener('submit', (e) => {
  if(verifyMarginValue() !== true) {
    e.preventDefault();
  } else {
    calculate();
    console.log("Ok");
  }
})

function verifyMarginValue() {
  if(margin.value >= 100) {
    setError("margin-error", "Margin cannot be equal to or greater than 100%. Please input a lower value.");
    return false
  } else if (margin.value <= 0) {
    setError("margin-error", "Please select a value that is no less than 0");
    return false
  } else {
    removeError();
    return true
  }
}

function smoothScrolling() {
    window.scrollTo({
      top: document.getElementById("section-two").offsetTop, 
    behavior: "smooth"
  })
}

function calculate() {
  verifyMarginValue();
  smoothScrolling();
  a = cost.value;
  b = (100 - margin.value) / 100;
  result = (a / b);
  res = document.getElementById("revenue-text").innerText = "$" + result.toFixed(2);
  net = netProfit.innerText = "$" + (result.toFixed(2) - a).toFixed(2);
  marginText = document.getElementById('margin-text').innerText = " " + margin.value + "%"
}

function setError(error, message) {
  document.querySelector("."+error).classList.add("display-error");
  document.querySelector("."+error).innerHTML = message;
}

function removeError() {
  let errors = document.querySelectorAll(".error");
  for(let err of errors) {
    err.classList.remove("display-error");
  }
}