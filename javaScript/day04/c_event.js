let $input1 = document.querySelector(".text1");
let $input2 = document.querySelector(".text2");
let $form = document.querySelector("form");

// 해당 요소가 포커스 되면 이벤트 발생
$input1.addEventListener("focus", () => {
  console.log("focus~~");
});

// 포커스를 잃으면 발생
$input1.addEventListener("blur", () => {
  console.log("blur~");
});

// keydown 키보드를 누르는 동안 계속 발생(입력과 상관없이 Ctrl키에도 발생되는 이벤트)
$input2.addEventListener("keydown", () => {
  console.log("down");
});

// keypress는 입력이 되어야 발생(한글은 적용이 안됌)
$input1.addEventListener("keypress", () => {
  console.log("press@@");
});

// keyup은 키보드를 눌렀다가 땔 때 발생
$input2.addEventListener("keyup", () => {
  console.log("keyup!!");
});

// change는 요소의 상태가 변경되면 발생
$input1.addEventListener("change", function () {
  console.log("change!");
  console.log(this.value);
});

// submit 이벤트는 form태그에 걸어준다.
$form.addEventListener("submit", () => {
  console.log("submit@@@");
  alert("submit@@@");
});

let colors = document.querySelectorAll(".color");
let foods = document.querySelectorAll(".food");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("change", function () {
    console.log("change!");
    console.log(this.value);
    console.log(this.checked);

    let $span = this.closest("label").querySelector("span");
    if (this.checked) {
      $span.style.color = "red";
    } else {
      $span.style.color = "black";
    }
  });
}

foods.forEach((ele) => {
  ele.addEventListener("change", function () {
    console.log("change!!");
  });
});
