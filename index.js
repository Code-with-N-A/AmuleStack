

// ================== section code js =====================
const filterButtons = document.querySelectorAll(".filee_btn button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// ================== projects li ===================
let projectsbtn = document.querySelector('nav ul li a[href="#projects"]');
let prijectsbtnli = document.querySelector(".filter");
 projectsbtn.addEventListener('click', (e) => {
  e.preventDefault();
  prijectsbtnli.scrollIntoView({behavior: 'smooth'});
  
 });


// ===========servises li============
let servicesBtn = document.querySelector('nav ul li a[href="#services"]');
let servicesSection = document.querySelector('.services');

servicesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});


// ============abouts=============
let primery = document.querySelector(".primary-btn");
let secendry = document.querySelector(".secondary-btn");
let pro = document.querySelector(".projects");

primery.addEventListener('click', () => {
  pro.scrollIntoView({ behavior: "smooth" });
});

secendry.addEventListener('click', () => {
  let pdfURL = "Certificate/Nitesh Amule .pdf";

  // PDF ko new tab me open karne ke liye
  window.open(pdfURL, '_blank');
});


// ================== Explore =====================
let Explore = document.querySelector(".Explore");
Explore.addEventListener('click', (e) => {
  e.preventDefault();
  prijectsbtnli.scrollIntoView({behavior: 'smooth'});
  
 });



//  =================== animetion scroling ===============
AOS.init({
    duration: 1000,   // Animation duration
    offset: 100,      // Scroll offset
    once: true        // Animation runs only once
  });

  