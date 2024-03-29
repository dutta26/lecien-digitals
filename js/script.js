function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}
function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 2000,
            easing: 'linear',
            step: function () {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function () {
                element.html(this.countNum + html);
            }
        });
    }
}
//When the document is ready
$(function () {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function () {
        //Checking if each items to animate are
        //visible in the viewport
        $("div[data-max]").each(function () {
            inVisible($(this));
        });
    })
});

function toggleMenu() {
    let menu = document.getElementById("mobile-navbar");
    if(menu.getAttribute("style") === "display: flex!important")
        menu.setAttribute("style", "display: none!important");
    else
        menu.setAttribute("style", "display: flex!important");
}