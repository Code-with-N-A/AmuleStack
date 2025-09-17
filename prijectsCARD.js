const container = document.querySelector('.projectsWidt');
const headings = document.querySelectorAll('.projects-heading li');
const projects = document.querySelectorAll('.projects-grid .project-card');
const allBtn = document.querySelector('button[data-filter="all"]'); // All button

// Function to manually trigger AOS animation
function triggerAOSFor(element) {
    element.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.remove('aos-animate');  // reset
        void el.offsetWidth;                 // force reflow
        el.classList.add('aos-animate');     // re-apply
    });
}

// ----- Container scroll -----
container.addEventListener('scroll', () => {
    document.querySelectorAll('[data-aos]').forEach(el => {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (rect.top < containerRect.bottom && rect.bottom > containerRect.top) {
            el.classList.add('aos-animate');
        }
    });
});

// ----- Headings click: show only clicked project -----
headings.forEach((heading, index) => {
    heading.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all
        projects.forEach(p => p.style.display = 'none');

        // Show clicked project
        const project = projects[index];
        if (project) {
            project.style.display = 'block';

            // 🔥 Trigger animation immediately
            setTimeout(() => triggerAOSFor(project), 50);

            // Stop unwanted scroll
            container.scrollTop = 0;
        }
    });
});

// ----- Page load: fire "All" button automatically -----
window.addEventListener('load', () => {
    if (allBtn) {
        allBtn.click();
    }
});
