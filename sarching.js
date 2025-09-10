const searchInput = document.getElementById("sarch");
const clearBtn = document.querySelector(".clear");
const suggestionBox = document.querySelector(".sarching-sagetion");

// Collect all text elements on page
const textElements = Array.from(document.body.querySelectorAll('p, h1, h2, h3, li, span, a'));

// Live search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (query) {
    clearBtn.style.display = "block";

    let suggestions = [];

    textElements.forEach(el => {
      if (el.innerText.toLowerCase().includes(query)) {
        suggestions.push(el.innerText);
      }
    });

    suggestions = [...new Set(suggestions)];
    if (suggestions.length) {
      suggestionBox.innerHTML = suggestions
        .slice(0, 10)
        .map(item => `<div>${item}</div>`)
        .join("");
      suggestionBox.classList.add("show");

    } else {
      suggestionBox.innerHTML = `<div>No result found</div>`;
      suggestionBox.classList.add("show");
    }
  } else {
    clearBtn.style.display = "none";
    suggestionBox.classList.remove("show");
  }

  // Responsive width same as search bar
  suggestionBox.style.width = `${searchInput.offsetWidth}px`;
});

// Suggestion click → scroll + highlight + clear search input
suggestionBox.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    const selectedText = e.target.textContent;
    const targetEl = textElements.find(el => el.innerText === selectedText);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      targetEl.classList.add("highlight");

      setTimeout(() => {
        targetEl.classList.remove("highlight");
      }, 2000);
    }

    // Clear search input & hide suggestion box
    searchInput.value = "";
    suggestionBox.classList.remove("show");
    clearBtn.style.display = "none";
  }
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  suggestionBox.classList.remove("show");
  clearBtn.style.display = "none";
  searchInput.focus();
});

// Window resize → keep suggestion box width same as search input
window.addEventListener("resize", () => {
  suggestionBox.style.width = `${searchInput.offsetWidth}px`;
});

// Initial width
suggestionBox.style.width = `${searchInput.offsetWidth}px`;


// ====================== srach icons phone me so ho bash ============================

let sicons = document.querySelector(".sicon");
let srchdiv = document.querySelector(".serch");

// Icon click par toggle
sicons.addEventListener('click', () => {
  srchdiv.classList.add('sicon');  // tumhare existing toggle
  sicons.classList.remove('sicon')
  sicons.el
});

// Scroll par automatically hide
window.addEventListener('scroll', () => {
  if (srchdiv.classList.contains('sicon')) {
    srchdiv.classList.remove('sicon'); // scroll karte hi hide
    sicons.classList.add('sicon')
  }
});

let contenorman = document.querySelector(".contenorman");
contenorman.addEventListener('click', () => {
  srchdiv.classList.remove('sicon'); // scroll karte hi hide
  sicons.classList.add('sicon')

})
