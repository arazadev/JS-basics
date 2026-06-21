const counterDisplay = document.getElementById("counterDisplay");

const incrementBtn = document.getElementById("incrementBtn");

const decrementBtn = document.getElementById("decrementBtn");

const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");

let count = 0;

function updateDisplay() {
  counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', ()=>{
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', ()=>{
    if (count > 0) {
    count--;
    updateDisplay();
  }
  else{
    document.body.style.backgroundColor = "pink";
    message.textContent = "Counter cannot go below 0!";

    setTimeout(()=>{
        document.body.style.backgroundColor = ""
        message.textContent = "";
    }, 1500);
  }
});

resetBtn.addEventListener('click', ()=>{
    count = 0;
    updateDisplay();
});