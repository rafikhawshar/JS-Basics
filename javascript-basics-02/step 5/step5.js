const imgs = document.querySelectorAll("img");

for (let img = 0; img < imgs.length; img++) {
 
  const originalSrc = imgs[img].getAttribute("src");

  imgs[img].addEventListener("mouseover", () => {
    imgs[img].setAttribute("src", `images/image${img + 1}_2.jpg`);
  });

 
  imgs[img].addEventListener("mouseout", () => {
    imgs[img].setAttribute("src", originalSrc);
  });
}
