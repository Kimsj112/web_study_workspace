// 기존의 익명함수 사용방법
let anonymous = function () {
  console.log("ㅎㅇ");
};

anonymous();

// 익명함수를 화살표 함수로 바꾸는 방법
// function 키워드 대신 => 를 사용한다. (간소화)
let arrow = () => console.log("ㅎㅇ");
// 실행코드가 한줄이어서 {}생략 가능!

arrow();

let sum = (a, b) => console.log(a + b);

sum(10, 20);

function test(callback) {
  for (let i = 0; i < 10; i++) {
    callback(i);
  }
}

// 익명함수를 콜백함수로 사용한다.
test(function (i) {
  console.log(i + 10);
});

// 화살표 함수도 익명함수와 동일하므로 콜백으로 사용 가능하다.
test((i) => console.log(i + 10));

// ===========================================================================

let ar = [1, 2, 3, 4, 5];

ar.forEach(function (i) {
  console.log(i);
});

ar.forEach((i) => console.log(i));

for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}
