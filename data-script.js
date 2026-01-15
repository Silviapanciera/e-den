document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");
  const mechanismBlur = document.querySelector(".mechanism-blur");

  function updateMechanismBlurHeight() {
    if (mechanismBlur) {
      const mechanismContent = mechanismBlur.querySelector(".mechanism-content");
      if (mechanismContent) {
        // Calcola l'altezza totale del contenuto incluso gli accordion aperti
        const contentHeight = mechanismContent.scrollHeight;

        // Calcola il padding bottom necessario per mantenere lo spazio
        // Assicurati che ci sia abbastanza spazio per il contenuto espanso
        const minPadding = 150;
        const calculatedPadding = Math.max(minPadding, 150 + (contentHeight * 0.1));

        mechanismBlur.style.paddingBottom = calculatedPadding + "px";

        // Aggiorna anche la min-height per assicurarsi che il contenuto sia sempre visibile
        const totalContentHeight = contentHeight + 144; // padding top + bottom
        mechanismBlur.style.minHeight = Math.max(400, totalContentHeight) + "px";
      }
    }
  }

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");

      item.classList.toggle("open");

      if (item.classList.contains("open")) {
        // Usa scrollHeight per ottenere l'altezza reale del contenuto
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0";
      }

      // Aggiorna l'altezza del mechanism-blur durante l'animazione
      const startTime = Date.now();
      const duration = 400; // ms

      const updateDuringAnimation = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < duration) {
          updateMechanismBlurHeight();
          requestAnimationFrame(updateDuringAnimation);
        } else {
          // Aggiorna finale dopo l'animazione
          updateMechanismBlurHeight();
        }
      };

      // Aggiorna immediatamente e durante l'animazione
      updateMechanismBlurHeight();
      requestAnimationFrame(updateDuringAnimation);
    });
  });

  // Aggiorna l'altezza iniziale dopo che tutto è caricato
  setTimeout(() => {
    updateMechanismBlurHeight();
  }, 100);

  // Aggiorna anche al resize della finestra
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateMechanismBlurHeight();
    }, 250);
  });
});
