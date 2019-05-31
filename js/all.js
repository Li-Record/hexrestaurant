$(document).ready(function() {
    $('.header-humMenu').click(function(e) {
        /* Act on the event */
        e.preventDefault();
        $('body').toggleClass('clickMenu');
    });
});