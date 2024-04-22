// 배열 생성 방식

// 1. Array 생성자 사용

// 매개변수로 값을 1개 넘기면 칸 수로 사용된다.
let ar = new Array(10);
console.log(ar);

// 매개변수로 값을 2개이상 넘기면 요소로 사용한다.
let ar2 = new Array(1, 2, 3);
console.log(ar2);

// 2. 보통 []를 사용한다.
let ar3 = [1, 2, 3];
console.log(ar3);

// 요소들의 타입이 달라도 상관 없다.
let ar4 = [1, "a", true];
console.log(ar4);

console.log(ar4.length);
console.log(ar4[0]);

for (let i = 0; i < ar4.length; i++) {
  console.log(ar4[i]);
}

// 없는 인덱스에 값을 저장하면 값이 추가된다.
ar4[5] = 22;
console.log(ar4);

// push(값)는 배열의 끝에 값을 추가한다.
ar4.push(11);
console.log(ar4);

// delete는 값을 삭제한다.
delete ar4[0];
console.log(ar4);

// pop()은 마지막 요소를 삭제한다.
ar4.pop();
console.log(ar4);
