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