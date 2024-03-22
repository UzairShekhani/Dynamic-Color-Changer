let inputBox = document.getElementById("input-box");
let resultBox = document.getElementById("result-box");
let startButton = document.getElementById("start")
let changeColor = ("click", () => {
  let input = inputBox.value;
  resultBox.style.backgroundColor = input;
});
inputBox.addEventListener("input", changeColor);
window.addEventListener("load", changeColor);

startButton.addEventListener("click",()=>{
  console.log();
})