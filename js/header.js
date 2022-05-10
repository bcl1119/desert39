$(function () {
    $(".gnb").hover(
        function () {
            $(".gnb-dummy").css("display", "block");
        },
        function () {
            $(".gnb-dummy").css("display", "none");
        }
    );
    $(".gnb-dummy").hover(
        function () {
            $(".gnb-dummy").css("display", "block");
        },
        function () {
            $(".gnb-dummy").css("display", "none");
        }
    );
    $(".gnb").hover(
        function () {
            $(".gnb .menu-list > li > ul").css("display", "block");
        },
        function () {
            $(".gnb .menu-list > li > ul").css("display", "none");
        }
    );
    $(".gnb-dummy").hover(
        function () {
            $(".gnb .menu-list > li > ul").css("display", "block");
        },
        function () {
            $(".gnb .menu-list > li > ul").css("display", "none");
        }
    );

    // function init() {
    //     winw = $(window).width();
    //     winh = $(window).height();
    //     winIw = $(window).innerWidth();
    //     winIh = $(window).innerHeight();
    //     winOw = $(window).outerWidth();
    //     winOh = $(window).outerHeight();
    //     scrt = $(window).scrollTop();
    //     scrl = $(window).scrollLeft();
    // } //fn init
    // init();
    // $(window).resize(function () {
    //     init();
    // }); //resize
    // $(window).scroll(function () {
    //     init();
    // }); //scroll

    // /* ---------------pc 메뉴--------------- */
    // $(".project-header .menu-list")
    //     .mouseenter(function () {
    //         if (winw > 1007) {
    //             //min-width:1024px
    //             $(".gnb-dummy").stop().slideDown(300);
    //             $(this).find("ul").stop().slideDown(300);
    //         } else {
    //             return false;
    //         }
    //     })
    //     .focusin(function () {
    //         if (winw > 1007) {
    //             //min-width:1024px
    //             $(".gnb-dummy").stop().slideDown(300);
    //             $(this).find("ul").stop().slideDown(300);
    //         } else {
    //             return false;
    //         }
    //     }); //in

    // $(".project-header")
    //     .mouseleave(function () {
    //         if (winw > 1007) {
    //             //min-width:1024px
    //             $(".gnb-dummy").stop().slideUp(300);
    //             $(this).find(".menu-list > li > ul").stop().slideUp(300);
    //         } else {
    //             return false;
    //         }
    //     })
    //     .focusout(function () {
    //         if (winw > 1007) {
    //             //min-width:1024px
    //             $(".gnb-dummy").stop().slideUp(300);
    //             $(this).find(".menu-list > li > ul").stop().slideUp(300);
    //         } else {
    //             return false;
    //         }
    //     }); //out
    // /* ---------------pc 메뉴 end--------------- */
});
