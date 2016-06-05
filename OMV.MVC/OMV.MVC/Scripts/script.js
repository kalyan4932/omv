$(document).ready(function () {
    
    setPaneHeights();
    $(window).resize(function () {
        setPaneHeights();
    });

    $('.omv-top-nav-container ul li a').on('click', function () {
        $('.omv-top-nav-container ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.omv-mob-search .glyphicon').on("click", function () {      
        $('.omv-mob-search-screen').slideDown("fast");       
    });

    $('.omv-ham-nav .glyphicon').on("click", function () {

        if ($(this).hasClass("glyphicon-menu-hamburger")) {
            $(this).removeClass("glyphicon-menu-hamburger");
            $(this).addClass("glyphicon-remove");
            $('.omv-mob-nav').slideDown();
        }
        else if ($(this).hasClass("glyphicon-remove")) {
            $(this).removeClass("glyphicon-remove");
            $(this).addClass("glyphicon-menu-hamburger");
            $('.omv-mob-nav').slideUp();
        }
    });

    $('.omv-mob-screen-cancel').on("click", function () {
        $('.omv-mob-search-screen').slideUp("fast");
    });

});

function setPaneHeights() {
    var deviceWidth = $(document).width();
    var leftPaneHeight = $('.omv-left-pane-container').height();
    var rightPaneHeight = $('.omv-right-pane-container').height();
    var contentPaneHeight = $('.omv-content-pane-container').height();
    if (deviceWidth > 992)
    {
        if (leftPaneHeight < contentPaneHeight) {
            $('.omv-left-pane-container').height(contentPaneHeight);
        }
        if (rightPaneHeight < contentPaneHeight) {
            $('.omv-right-pane-container').height(contentPaneHeight);
        }
    }
    
}