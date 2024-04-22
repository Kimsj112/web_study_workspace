{
  let $checkAll = document.querySelector("#check-all");
  let $checkBtns = document.querySelector(".check-btn");

  $checkAll.addEventListener("change", function () {
    // console.log(this.checked);
    let isChecked = false;

    if (this.checked) {
      isChecked = true;
    }

    $checkBtns.forEach((ele) => {
      ele.checked = isChecked;
    });
  });

  $checkBtns.forEach((ele) => {
    ele.addEventListener("change", function () {
      if (ele.checked) {
        return;
      }

      $checkAll.checked = false;
    });
  });
}
