document.addEventListener("DOMContentLoaded", () => {

    const images = [
      "assets/1.png",
      "assets/2.png",
      "assets/3.png",
      "assets/4.png",
      "assets/5.png",
      "assets/6.png",
      "assets/7.png",
      "assets/8.png",
      "assets/9.png"
    ];
  
    let currentIndex = 0;
    let startX = 0;
  
    const image = document.getElementById("gallery-image");
    const gallery = document.querySelector(".product-gallery");
    const leftZone = document.querySelector(".gallery-click-zone.left");
    const rightZone = document.querySelector(".gallery-click-zone.right");
  
    if (!image) return;
  
    function showImage(index) {
      image.src = images[index];
    }
  
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    /* CLICK DESKTOP */
    leftZone.addEventListener("click", prev);
    rightZone.addEventListener("click", next);
  
    /* TOUCH */
    gallery.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
  
    gallery.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const delta = startX - endX;
  
      if (Math.abs(delta) < 50) return;
  
      delta > 0 ? next() : prev();
    });
  
  });
  