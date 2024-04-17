const canvas = document.querySelector("canvas");
const sidebar = document.querySelector(".sidebar");
const ctx = canvas.getContext("2d");
const strokeSlider = document.querySelector("#stroke");
const colorSlider = document.querySelector("#color");

window.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
    ctx.save();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = strokeSlider.value;
    ctx.strokeStyle = colorSlider.value;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - sidebar.clientWidth, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - sidebar.clientWidth, e.clientY);
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", () => {
  ctx.restore();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
