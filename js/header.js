$(function () {

    /* ---------------헤더--------------- */
    function header_motion() {
        if (scrt >= 60) {
            $(".project-header").addClass("active")
        } else {
            $(".project-header").removeClass("active")
        }//if else
    }//fn header_motion()

    function fixed_menu_motion() {
        var footer_t = $(".project-footer").offset().top
        if (scrt >= 100 && scrt <= footer_t - winh * 0.85) {
            $(".right-fixed-menu").stop().fadeIn(300)
        } else {
            $(".right-fixed-menu").stop().fadeOut(300)
        }//if else
    }//fn fixed_menu_motion()

    header_motion()
    fixed_menu_motion()
    $(window).resize(function () {
        header_motion()
        fixed_menu_motion()
    })//resize
    $(window).scroll(function () {
        header_motion()
        fixed_menu_motion()
    })//scroll

    $(".btn-fixed-top").click(function () {
        $("html, body").animate({ "scrollTop": 0 }, 300)
    })//click

    $(".btn-fixed-mopen").click(function () {
        $(this).parents(".right-fixed-menu").toggleClass("active")
        if ($(this).parents(".right-fixed-menu").hasClass("active")) {
            $(this).find(".text").text("Close")
        } else {
            $(this).find(".text").text("More")
        }//if else
    })//clic
}
    /* ---------------헤더 end--------------- */