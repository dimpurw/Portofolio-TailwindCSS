const mybutton = document.getElementById("toTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
    const position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(10, -Math.max(1, Math.floor(position / 20)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}