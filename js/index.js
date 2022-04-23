// navbar hide 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigation").style.top = "0";
    } else {
        document.getElementById("navigation").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
// data-filter
const filterContainer = document.querySelector(".buttons");
const galleryItems = document.querySelectorAll(".gallery-item");
filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {

        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");

        // activate new 'filter-item'
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");

        galleryItems.forEach((item) => {

            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            }

            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }

        });
    }
});
// menu button
document.querySelector("#nav-icon1").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("responsive");
    document.querySelector("#nav-icon1").classList.toggle("open");
});
// // search bar
// document.addEventListener('click', (e) => {
//     const toggle = document.querySelector('.search__toggle')
//     const input = document.querySelector('.search__input')
//     const clickedElement = e.target

//     if (clickedElement == toggle) {
//         input.value = ''
//         return;
//     }

//     const isSearchField = clickedElement.closest('.search__field')

//     if (!isSearchField) {
//         toggle.checked = false
//         input.value = ''
//     }
// })
//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// for preloader
var load = document.getElementById("loading");
function loadfun() {
    load.style.display = 'none';
}
// // pause video 
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtns");

function myFunction() {
    var item = document.querySelector("#myBtns i");
    if (video.paused) {
        video.play();
        item.classList.remove("fa-play");
        item.classList.add("fa-pause");
    } else {
        video.pause();
        item.classList.remove("fa-pause");
        item.classList.add("fa-play");
    }
}
// dark mode 
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);