let scrollBtn = document.getElementById('scrollUp');

window.onscroll = function () {
    scrollFunction()    
}

function scrollFunction() {
    if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// hamburger meny
const hamMenu = document.getElementById('hamMenu');
const navLinks = document.querySelector('.nav-links');

hamMenu.addEventListener("click", function () {
    navLinks.classList.toggle('active');
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}