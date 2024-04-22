let hi = function () {
  console.log("Hello~");
};

// JS의 함수는 변수에 저장할 수 있다.
// 변수에 저장할 때에는 함수 이름을 작성하여도 함수 이름으로 호출할 수 없다.
// 그러므로 익명함수를 사용한다.
// function hi() {
//   console.log("Hello~");
// }
//   위 두가지 방법의 결과물은 똑같다.

// ----------------------------------------------------------------------------------

function repNum() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

let printAdd10 = function (num) {
  if (num % 2 == 0) {
    console.log(num + 10);
  }
};

function printNum(num) {
  console.log(num);
}

function repeatNum(f) {
  for (let i = 0; i < 10; i++) {
    f(i);
  }
}

// 이렇게 매개변수를 통해 다른 함수로 전달되는 함수를 콜백 함수라고 한다.
repeatNum(printNum);
repeatNum(printAdd10);
repeatNum(function (n) {
  console.log(n * 2);
});

// --------------------------------------------------------------------------------
(function () {
  console.log("안녕하세요!");
})();

(function (a, b) {
  console.log(a + b);
})(2, 5);
