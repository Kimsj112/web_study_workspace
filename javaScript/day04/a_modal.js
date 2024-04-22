{
  let $loginMenu = document.querySelector(".login-menu");
  let $modalBox = document.querySelector(".modal-bg");
  let $xBox = document.querySelector(".x-box");

  console.log($loginMenu);

  $loginMenu.addEventListener("click", function () {
    $modalBox.style.display = "flex";
  });

  $xBox.addEventListener("click", function () {
    $modalBox.style.display = "none";
  });

  let $title = $modalBox.querySelector("h1");
  console.log($title);

  $title.addEventListener("mouseover", function () {
    this.style.color = "red";
  });

  $title.addEventListener("mouseout", function () {
    this.style.color = "black";
  });

  $title.addEventListener("click", function () {
    console.log(this);
    console.log(this.closest(".modal-bg"));
    this.closest(".modal-bg").style.display = "none";
  });
}
