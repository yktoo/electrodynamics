$(document).ready(function () {

    /**
     * Initialise the scroll-to-top button
     */
    const btnScrollToTop = $('#btn-scroll-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btnScrollToTop.addClass('show');
        } else {
            btnScrollToTop.removeClass('show');
        }
    });

    btnScrollToTop.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
