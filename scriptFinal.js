// Navigation menu, search bar, and header functionality
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let searchForm = document.querySelector('.search-bar-container');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active'); // Close search bar when menu is clicked
};

document.querySelector('#search-bar').onclick = () => {
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); // Close menu when search bar is clicked
};

window.onscroll = () => {
    // Hide menu and search bar on scroll
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    // Make header sticky on scroll
    if (window.scrollY > 140) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

// Swiper slider initialization for the home section
var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Accordion functionality for the FAQ section
document.querySelectorAll('.accordion-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        document.querySelectorAll('.accordion').forEach(acc => {
            if (acc !== heading.parentElement) acc.classList.remove('active');
        });
        heading.parentElement.classList.toggle('active');
    });
});

// Deal of the day countdown timer
function countdownTimer() {
    const countDownDate = new Date("October 31, 2025 23:59:59").getTime();

    let x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minute").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("second").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("day").innerHTML = "00";
            document.getElementById("hour").innerHTML = "00";
            document.getElementById("minute").innerHTML = "00";
            document.getElementById("second").innerHTML = "00";
        }
    }, 1000);
}
countdownTimer();

// Handle all "btn" clicks (Pre-order)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let text = button.textContent.toLowerCase();

        if (text.includes('shop now')) {
            alert('Redirecting to the category page...');
        } else if (text.includes('pre-order')) {
            alert('✅ Pre-order done successfully!');
        }
    });
});

// Functionality for product icons
let productIcons = document.querySelectorAll('.product .box-container .box .icons a');
productIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        let iconClass = icon.classList;

        if (iconClass.contains('fa-heart')) {
            alert('Product added to your wishlist!');
        } else if (iconClass.contains('fa-share')) {
            alert('Share options will be available soon!');
        } else if (iconClass.contains('fa-eye')) {
            alert('Viewing product details...');
        }
    });
});

// Search bar submit
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchTerm = document.getElementById('search-bar').value.toLowerCase();

    if (searchTerm) {
        alert(`Searching for: "${searchTerm}"`);
    } else {
        alert('Please enter a search term!');
    }
});

// Scroll-top button
document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};







/* Dark/Light mode toggle functionality -->*/

const toggleButton = document.getElementById("mode-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Mode save in localStorage so that it remembers
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
        toggleButton.textContent = "☀️";
    } else {
        localStorage.setItem("mode", "light");
        toggleButton.textContent = "🌙";
    }
});

// Check saved mode on page load
window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }
});
