// get elements

// variables
let mousePosition = { x: undefined, y: undefined };
// functions

// event listeners
addEventListener("mousemove", (e) => {
  mousePosition = { x: e.clientX, y: e.clientY };
  document.querySelector(".x").textContent = mousePosition.x;
  document.querySelector(".y").textContent = mousePosition.y;
});

// init
