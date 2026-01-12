document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".accordion-toggle");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const item = toggle.closest(".accordion-item");
        const panel = item.querySelector(".accordion-panel");
  
        item.classList.toggle("open");
  
        if (item.classList.contains("open")) {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel.style.maxHeight = null;
        }
      });
    });
  });
  