const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const volumeOff = document.getElementById("volume-off");
const seeSaveValues = document.getElementById("see-save");

let score = 0;
let audio = new Audio("sound/click.mp3");

// Button for adding values in input field:
addBtn.addEventListener("click", () => {
  score++;
  input.value = score;
  audio.play();
  resetValue();
  checkValue();
});

// For reset All values from input field:
resetBtn.addEventListener("click", () => {
  const userConfirmation = confirm(
    "All data will be Lost! Are You Sure to delete!  If you then click Ok."
  );

  if (userConfirmation === true) {
    score = 0;
    input.value = score;
    resetValue();
    checkValue();
  }
  console.log("reset clicked");
});

// Condition For reset button:
function resetValue() {
  if (input.value === "0" || input.value === "") {
    resetBtn.disabled = true;
  } else {
    resetBtn.disabled = false;
  }
}

input.addEventListener("input", resetValue);

// CODE FOR SAVE VALUE IN LOCAL STORAGE!:

saveBtn.addEventListener("click", () => {
  const saveConfirmation = confirm("Click Ok To save this data!");

  if (saveConfirmation === true) {
    localStorage.setItem("score", input.value);
  }
  checkValue();
});

function checkValue() {
  if (input.value > 0) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

checkValue();

input.addEventListener("input", () => {
  // resetValue();
  checkValue();
});

// EXTRA BUttons:
// VOLUME-OFF btn:
volumeOff.addEventListener("click", () => {
  if (audio.volume === 0) {
    audio.volume = 1;
    volumeOff.className = "fa-solid fa-volume-high";
  } else {
    audio.volume = 0;
    volumeOff.className = "fa-solid fa-volume-xmark";
  }
});

// FOR SHOWING SAVE VALUES:

seeSaveValues.addEventListener("click", () => {
  //
  let storedData = localStorage.getItem("score");
  alert("Your Saved Data is " + storedData);
});
