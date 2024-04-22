{
  let obj = {
    num1: 10, // 키 : 값 -> 프로퍼티
    num2: 20,
    name: "홍길동",
    sum: function () {
      // 프로퍼티의 값 위치에 함수가 들어올 수 있다.
      // 이렇게 값이 함수인 경우 이 프로퍼티를 메서드라고 부른다.
      return this.num1 + this.num2;
    },
  };

  console.log(obj.num1);
  console.log(obj.sum());

  console.log(obj["name"]);

  let input = "name";
  console.log(obj[input]);

  console.log(obj);
}

{
  let user = {
    userId: 1,
    loginId: "aaa",
    password: "1234",
    name: "홍길동",
  };

  user.loginId = "ddd";
  console.log(user.loginId);

  // 객체를 생성한 이후에 해당 객체에 프로퍼티를 생성하거나 삭제하는게 가능하다.

  // 객체에 존재하지 않는 키를 이용하여 값을 저장하면 새로운 프로퍼티를 만들어준다.
  user.nickname = "바보";
  console.log(user);

  delete user.password;
  console.log(user);
}
