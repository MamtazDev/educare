
$(document).ready(function () {
  // WOW JS INIT
  $(function () {
    var wow = new WOW({
      animateClass: "animated",
      mobile: true,
    });
    wow.init();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }
  // end if innerWidth
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader
  var preloader = document.querySelector(
    ".loadingio-spinner-spinner-sftw2cww3dg"
  );
  preloader.style.display = "none";

  // Show the main content after a delay (e.g., 10000 milliseconds or 10 seconds)
  setTimeout(function () {
    var mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
  }, 10000); // Adjust the delay time (in milliseconds) as needed
});

window.addEventListener("load", function () {
  // Hide the preloader
  var preloader = document.querySelector(
    ".loadingio-spinner-spinner-sftw2cww3dg"
  );
  preloader.style.display = "none";

  // Show the main content after a delay (e.g., 10000 milliseconds or 10 seconds)
  setTimeout(function () {
    var mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
  }, 10000); // Adjust the delay time (in milliseconds) as needed
});


window.addEventListener("load", function () {
  var preloader = document.querySelector(
    ".loadingio-spinner-spinner-sftw2cww3dg"
  );
  preloader.style.display = "none";
  var mainContent = document.getElementById("main-content");
  mainContent.style.display = "block";
  window.scrollBy(0, 1000);
});

