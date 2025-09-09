let whatsap = document.querySelector(".whatsapp-icon");

whatsap.addEventListener('click', () => {
  let phone = "919303546247";  
  let message = "Hello, I want to connect with you!";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
