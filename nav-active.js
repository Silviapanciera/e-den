document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    const linkPage = linkHref.split("/").pop();
    
    // Rimuovi la classe active da tutti i link
    link.classList.remove("active");
    
    // Controlla se il link corrisponde alla pagina corrente
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
