const typedText = document.querySelector(".typing");
const words = ["FRONTEND DEVELOPER", "WEB DESIGNER", "CODER"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    typedText.textContent = currentWord.substring(0, j++);
    if (j === currentWord.length + 1) {
      isDeleting = true;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();


// Animate circular progress on scroll
const circles = document.querySelectorAll(".circle");

function animateCircles() {
  circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    circle.style.setProperty("--percent", percent + "%");
  });
}

// Run animation when section is in view
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const position = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (position < screenPos) {
    animateCircles();
  }
});

