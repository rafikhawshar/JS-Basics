const img = document.querySelector("img");


img.addEventListener("mouseover", () => {
  img.style.border = "3px solid red";
});

img.addEventListener("mouseout", () => {
  img.style.border = "none";
});