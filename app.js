$(document).ready(function() {

    $(window).on("scroll", function() {
        var scrollDistance = $(window).scrollTop();

        // console.log(scrollDistance, "DISTANCE FROM TOP");

        if (scrollDistance > 50) {
            $("#mainNav").addClass("affix");
        } else {
            $("#mainNav").removeClass("affix");
        }

    });

    $(".page-scroll").on("click", function() {
        var contentSectionDesired = $(this).attr("href");

        // console.log($(contentSectionDesired).offset().top);

        $("body").animate({
            scrollTop: $(contentSectionDesired).offset().top
        });
    });

    // Activate Scrollspy
    $("body").scrollspy({ target: "#mainNav" })

    // Initialize wow.js
    new WOW().init();

});
