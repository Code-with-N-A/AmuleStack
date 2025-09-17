let togel = document.querySelector(".toggle");
let toggle_btn = document.querySelector(".toggle-btn");
let close = document.querySelector(".close");

toggle_btn.addEventListener('click', () => {
    togel.classList.add('toggle-active');
})
close.addEventListener('click', () => {
    togel.classList.remove('toggle-active');
})

// =================== pc me Activ or clos ke liye ======================
let contectTogel = document.querySelector(".contect");
contectTogel.addEventListener('click', () => {
    togel.classList.add('toggle-active');
})
