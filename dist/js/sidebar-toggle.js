const menuToggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open')
})
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});



// Zeige den Loader beim Laden der Seite an
const loader = document.querySelector(".loader");
loader.style.display = "flex";

// Warte bis die gesamte Seite geladen ist
window.addEventListener("load", function () {
    // Blende den Loader nach zwei Sekunden aus
    setTimeout(function () {
        loader.style.display = "none";
    }, 2000);
});





