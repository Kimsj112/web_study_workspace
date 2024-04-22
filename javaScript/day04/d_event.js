let $input = document.querySelector("#email");
let $placeholder = document.querySelector(".placeholder");
let $inputBox = document.querySelector(".input-box");

$input.addEventListener("keyup", function () {
  //   console.log("a");
  if (this.value) {
    console.log("true");
    $placeholder.style.fontSize = "9px";
    $inputBox.style.alignItems = "flex-end";
  } else {
    console.log("false");
    $placeholder.removeAttribute("style");
    $inputBox.style.alignItems = "center";
  }
});
