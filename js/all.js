$(document).ready(function() {
    $('.header-humMenu').click(function(e) {
        /* Act on the event */
        e.preventDefault();
        $('body').toggleClass('clickMenu');
    });
    $('.orderMain-product-favoriteIcon').click(function(e) {
        /* Act on the event */
        e.preventDefault();
        $(this).find('i').toggleClass('far');
        $(this).find('i').toggleClass('fas');
    });
});