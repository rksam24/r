navHide = document.getElementsByClassName('nav-hidden')[0];

if (navHide) {
    var last_scroll_top = 0;
    window.onscroll = () => {

        if (window.scrollY > 20)
            navHide.classList.add("sticky");
        else
            navHide.classList.remove("sticky");

        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
            navHide.classList.remove('scrolled-down');
            navHide.classList.add('scrolled-up');
        } else {
            navHide.classList.remove('scrolled-up');
            navHide.classList.add('scrolled-down');
        }
        last_scroll_top = scroll_top;
    };
}

var newTab = (href) => {
    window.open(href, "_blank")
}