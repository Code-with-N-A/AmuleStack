let togel = document.querySelector(".contect");
let togelform = document.querySelector(".toggle");
let removT = document.querySelector(".close");

let contect = document.querySelector(".conT");
let servis = document.querySelector(".options");
let conbtn = document.querySelector("#Contect-form")
let serbtn = document.querySelector("#ul-form")

// phone togel btn
let phon_T = document.querySelector(".toggle-btn")
phon_T.addEventListener('click', () =>{
    togelform.classList.add("toggle-active")
    phon_T.classList.remove("toggle-btn");

})
// pc togel btn
togel.addEventListener('click', (e) => {
    e.preventDefault();
    togelform.classList.add("toggle-active");
});

removT.addEventListener('click', () => {
    togelform.classList.remove("toggle-active");
    contect.classList.add("conT");
    conbtn.classList.remove("conT");
    serbtn.classList.remove("conT")
    servis.classList.remove("contect-s");
    phon_T.classList.add("toggle-btn");


});


conbtn.addEventListener('click', () => {
    contect.classList.remove("conT");
    conbtn.classList.add("conT");
    serbtn.classList.add("conT")
});

serbtn.addEventListener('click', () => {
    servis.classList.add("contect-s");
    conbtn.classList.add("conT");
    serbtn.classList.add("conT");
});

