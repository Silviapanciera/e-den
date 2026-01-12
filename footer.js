document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
  
    if (!footer) return;
  
    const revealOffset = 80; // px prima del fondo
  
    function checkFooterReveal() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
  
      if (scrollPosition >= documentHeight - revealOffset) {
        footer.classList.add("is-visible");
      } else {
        footer.classList.remove("is-visible");
      }
    }
  
    window.addEventListener("scroll", checkFooterReveal, { passive: true });
  });
  