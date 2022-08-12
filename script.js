const boxes = document.querySelector(".boxes");
const aboutme = document.querySelector("#aboutme");
boxes.addEventListener(
  "click",
  (someFunc = (e) => {
    console.log(e.target);

    if (e.target.id === "box-1") {
      aboutme.innerHTML = "Tik Tok";
    } else if (e.target.id === "box-2") {
      aboutme.innerHTML = "Graphic Design";
    } else if (e.target.id === "box-3") {
      aboutme.innerHTML = "Photography";
    }
  })
);
