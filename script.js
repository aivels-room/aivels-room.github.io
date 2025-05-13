// Accordion behavior
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const inner = content.querySelector('.accordion-inner');
    if (content.style.height && content.style.height !== "0px") {
      content.style.height = "0px";
    } else {
      content.style.height = inner.scrollHeight + "px";
    }
  });
});

// Smooth anchor scroll (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Arrow key fullpage scroll
document.addEventListener('keydown', (e) => {
  const sections = document.querySelectorAll('.fullpage-section');
  const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)?.closest('.fullpage-section');
  const currentIndex = Array.from(sections).indexOf(currentSection);

  if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
    sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
  }

  if (e.key === 'ArrowUp' && currentIndex > 0) {
    sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector('.scroll-down-arrow').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

/*slideshow*/
const slidesWrapper = document.getElementById("slidesWrapper");
const totalSlides = slidesWrapper.children.length;
let slideIndex = 0;
let slideshowTimer;

function updateSlidePosition() {
  slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  updateSlidePosition();
  resetSlideshow();
}

function startSlideshow() {
  slideshowTimer = setInterval(() => {
    plusSlides(1);
  }, 5000); // 5 seconds
}

function resetSlideshow() {
  clearInterval(slideshowTimer);
  startSlideshow();
}

// Start on page load
startSlideshow();

// Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll('.modal-trigger').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

modalClose.onclick = () => {
  modal.style.display = "none";
};

// Click to Expand from Overlay Button
document.querySelectorAll('.overlay-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const img = event.target.closest('.slides').querySelector('img');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// About section accordion with "Click me" feature
const aboutToggle = document.querySelector('#about .accordion-button');
const aboutContent = document.querySelector('#about .accordion-content');
const clickHintAbout = document.getElementById("clickHintAbout");

aboutToggle.addEventListener("click", () => {
  if (aboutContent.style.height && aboutContent.style.height !== "0px") {
    aboutContent.style.height = "0px";
  } else {
    const inner = aboutContent.querySelector('.accordion-inner');
    aboutContent.style.height = inner.scrollHeight + "px";
  }
});

// Hint animation for About section
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    clickHintAbout.style.opacity = 1;
  }, 800);

  setTimeout(() => {
    clickHintAbout.style.opacity = 0;
  }, 10800);
});

/* trinekts */
const triggers = [
  { trigger: '.secret-trigger', modal: '#trinket-modal', close: '.close-button' },
  { trigger: '.secret-trigger2', modal: '#trinket-modal2', close: '.close-button2' },
  { trigger: '.secret-trigger3', modal: '#trinket-modal3', close: '.close-button3' },
  { trigger: '.secret-trigger4', modal: '#trinket-modal4', close: '.close-button4' },
];

triggers.forEach(({ trigger, modal, close }) => {
  const triggerEl = document.querySelector(trigger);
  const modalEl = document.querySelector(modal);
  const closeEl = document.querySelector(close);

  if (triggerEl && modalEl && closeEl) {
    triggerEl.addEventListener('click', () => modalEl.style.display = 'flex');
    closeEl.addEventListener('click', () => modalEl.style.display = 'none');

    window.addEventListener('click', (event) => {
      if (event.target === modalEl) {
        modalEl.style.display = 'none';
      }
    });
  }
});



  document.addEventListener("DOMContentLoaded", function() {
    const doggoVideo = document.getElementById("doggoTrigger");

    doggoVideo.addEventListener("click", function () {
      if (doggoVideo.paused) {
        doggoVideo.play();
      } else {
        doggoVideo.pause();
        doggoVideo.currentTime = 0;
      }
    });
  });

