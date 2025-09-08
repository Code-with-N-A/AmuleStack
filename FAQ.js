const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const aswer = question.nextElementSibling
        const togel = question.querySelector(".faq-toggle");


        if (aswer.style.maxHeight) {
            aswer.style.maxHeight = null;
            togel.textContent = "+";
        } else {
            faqQuestions.forEach((e) => {
                e.nextElementSibling.style.maxHeight = null;
                e.querySelector(".faq-toggle").textContent = "+";
            });
            aswer.style.maxHeight = aswer.scrollHeight + "px";
            togel.textContent = "-";
        }
    })
})