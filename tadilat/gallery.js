
document.addEventListener("DOMContentLoaded", () => {
const images = [
    "parke.jpg",
    "peyzaj.jpg",
    "seramikdoseme.jpg",
    "suariza.jpg",
    "sutesisat.jpg",
    "tadilat.jpg",
    "tadilattamirat.jpg",
    "parke.jpg",
    "panotesisat.jpg",
    "fayans1.jpg",
    "fayans.jpg",
    "etesisat.jpg",
    "duvar.jpg",
    "boyabadana.jpg",
    "bahceduzenleme.jpg",
    "bahceduvar.jpg",
    "pencere.jpg",
    "kapi.jpg"
  ];

  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    const image = document.createElement("img");
    image.src = "images/" + img;
    image.alt = "İnşaat ve tadilat uygulaması";

    // 👇 TIKLAYINCA BÜYÜT
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = image.src;
    });

    gallery.appendChild(image);
  });

  // 👇 DIŞARI TIKLAYINCA KAPAT
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

});