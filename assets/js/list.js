$(function() {
    $('.one-yi>li').click(function() {
        $(this).children('.submenu').slideToggle();
        // .end().siblings().children('.submenu').slideUp();
    })
})