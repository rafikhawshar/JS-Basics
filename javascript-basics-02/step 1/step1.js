
const imageElement = document.querySelector("#image1");
const originalImageSrc = imageElement.src;
imageElement.addEventListener("mouseover", function() {
  imageElement.src = "images/image1_2.jpg";
});
imageElement.addEventListener("mouseout", function() {
  imageElement.src = originalImageSrc;
});
