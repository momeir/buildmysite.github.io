let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change d'image toutes les 5 secondes
}

// Gestionnaires d'événements pour les boutons "précédent" et "suivant"
document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  plusSlides(1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}
