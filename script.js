const imageThumbs = document.getElementById("image-thumbs");
const currentImage = document.getElementById("current-image");

for (let i = 1; i <= 6; i++) {
  const thumb = document.createElement("img");
  thumb.src = `images/image${i}.jpg`;
  thumb.alt = `Image ${i}`;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);

  thumb.addEventListener("click", function () {
    currentImage.src = this.src;
  });
}
