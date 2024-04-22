{
  let $slideBox = document.querySelector(".slide-box");
  let $slideImgs = document.querySelectorAll(".slide-img");
  let $next = document.querySelector(".next");
  let $prev = document.querySelector(".prev");

  //   슬라이드 박스 너비
  const SLIDE_WIDTH = 800;
  // 슬라이드 이미지 인덱스번호
  let currentIdx = 0;
  //   총 슬라이드 이미지 수
  let slideCnt = $slideImgs.length;

  //   console.log("slideCnt : ", slideCnt);
  checkEnd();

  $next.addEventListener("click", function () {
    currentIdx++;
    $slideBox.style.left = `${-currentIdx * SLIDE_WIDTH}px`;
    checkEnd();
  });

  $prev.addEventListener("click", function () {
    currentIdx--;
    $slideBox.style.left = `${-currentIdx * SLIDE_WIDTH}px`;
    checkEnd();
  });

  setInterval(function () {
    if (currentIdx == slideCnt - 1) {
      moveFirst();
    } else {
      moveNext();
    }
  }, 1000);

  function moveFirst() {
    $slideBox.setAttribute("style", "transition : none");
    currentIdx = 0;
    $slideBox.style.left = "0";
    checkEnd();
  }

  function moveNext() {
    $slideBox.removeAttribute("style");
    currentIdx++;
    $slideBox.style.left = `${-currentIdx * SLIDE_WIDTH}px`;
    checkEnd();
  }

  function checkEnd() {
    if (currentIdx <= 0) {
      $prev.classList.add("none");
    } else {
      $prev.classList.remove("none");
    }

    if (currentIdx >= slideCnt - 1) {
      $next.classList.add("none");
    } else {
      $next.classList.remove("none");
    }
  }
}

// setTimeout(function () {
//   console.log("timeout!!!");
// }, 1000);

// setInterval(function () {
//   console.log("interval!!");
// }, 1000);
