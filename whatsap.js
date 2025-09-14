
document.addEventListener("DOMContentLoaded", function () {
  const socialContainer = document.querySelector(".social-icons");
  const globeIcon = document.querySelector(".social-icons .main-icon");

  globeIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    socialContainer.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!socialContainer.contains(e.target)) {
      socialContainer.classList.remove("active");
    }
  });
 
});

