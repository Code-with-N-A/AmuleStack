// Skill details hover
const skillDetails = document.querySelector(".skill-details");
const cards = document.querySelectorAll(".skill-card");
const detailsData = {
    html: "HTML: Started learning in  <b> January 2024 from YouTube (CodeWithHarry)</b>. Gained a strong foundation in semantic HTML, forms, tables, lists, and media elements. Learned how to structure web pages professionally, implement accessible content, and follow SEO best practices. Practiced by building multiple mini projects including personal portfolio, landing pages, and interactive forms. Focused on writing clean, maintainable code and understanding HTML's role as the backbone of web development.",
    css: "CSS: Started learning in <b> February 2024 from YouTube (CodeWithHarry)</b> . Gained strong knowledge of selectors, box model, Flexbox, Grid, pseudo-classes, and animations. Learned responsive design techniques using media queries to make websites adapt to different devices. Practiced by styling multiple mini projects including portfolios, landing pages, and interactive components. Focused on writing clean, maintainable, and visually appealing code that enhances user experience.",
    js: "JavaScript: Started learning in <b>January 2025 with AI assistance (ChatGPT)</b>. Gained strong understanding of ES6 features, DOM manipulation, events, and Fetch API for asynchronous data handling. Practiced building interactive web components and small projects like calculators, todo apps, and form validations. Focused on writing clean, maintainable code and understanding JavaScript's role in creating dynamic, responsive web applications.",
    react: "React: Started learning in <b>September 2025 with AI assistance (ChatGPT)</b>. Gained solid understanding of components, props, state management, and hooks. Learned how to build dynamic, reusable UI components and manage application state effectively. Practiced by creating small interactive apps and mini projects to strengthen problem-solving and front-end development skills. Focused on writing clean, maintainable code following best practices for modern React development.",
    nodejs: "Node.js: Locked. Unlock after React.",
    express: "Express: Locked. Unlock after Node.js.",
    mongodb: "MongoDB: Locked. Unlock after Node.js.",
    git: "Git: Locked. Unlock after React & Node."
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.key;
        skillDetails.innerHTML = `<p>${detailsData[key]}</p>`;
    });
});

// Certificate buttons open in new window
const certButtons = document.querySelectorAll(".cert-btn");
certButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const url = btn.dataset.url;
        window.open(url, "_blank", "width=900,height=700");
    });
});

// Profile and background image click open full-size
document.querySelector(".profile-img").addEventListener("click", () => {
    const src = document.querySelector(".profile-img").src;
    window.open(src, "_blank", "width=600,height=600");
});
document.querySelector(".bg-img").addEventListener("click", () => {
    const src = document.querySelector(".bg-img").src;
    window.open(src, "_blank", "width=900,height=400");
});
