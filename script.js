/* ===========================
   Typing animation
=========================== */

const words = [
    "Java Developer",
    "Spring Boot Developer",
    "SAP ABAP Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type(){
    if(charIndex < words[wordIndex].length){
        typing.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,90);
    } else {
        setTimeout(erase,1400);
    }
}

function erase(){
    if(charIndex > 0){
        typing.textContent = words[wordIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,45);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type,300);
    }
}

document.addEventListener("DOMContentLoaded", type);

/* ===========================
   Mobile nav toggle
=========================== */

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===========================
   Scroll reveal
=========================== */

const revealEls = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

/* ===========================
   Back to top button
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 400){
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ===========================
   Footer year
=========================== */

document.getElementById("year").textContent = new Date().getFullYear();

/* ===========================
   Project image lightbox
=========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll("[data-lightbox]").forEach(el => {
    el.addEventListener("click", () => {
        lightboxImg.src = el.getAttribute("data-lightbox");
        lightbox.classList.add("show");
        document.body.style.overflow = "hidden";
    });
});

function closeLightbox(){
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeLightbox();
});

/* ===========================
   Contact form (front-end only demo)
=========================== */

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if(contactForm){
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formNote.textContent = "Thanks for reaching out! I'll get back to you soon.";
        contactForm.reset();
        setTimeout(() => { formNote.textContent = ""; }, 4000);
    });
}