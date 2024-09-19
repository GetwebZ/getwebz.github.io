/*************************************************************************
    
    Template Name: Wekala Multipurpose Agency HTML Template
    Template URI: https://themeforest.net/user/creative-wp
    Author: creative-wp
    Author URI: https://themeforest.net/user/creative-wp
    Description: It is a Multipurpose HTML5 Portfolio Template. Which is a unique feature and user competitive feature.
    Version: 1.0
    
    
    Note: style js.
*************************************************************************/
/*
    01. Scroll top
    02. Mobile Menu
    03. Sticky Header
    04. Parallax Background
    05. Aos Initializ
    06. Count Down
    07. Brands Slider
    08. Protfolio Carousel
    09. Testimonail
    10. Tumbnail Carousel
    11. Restaurant Gallery
    12. Gallery Popup
    13. Youtube video trigger 
    14. Nav scroll
 
==================================================
[ End table content ]
==================================================*/


(function($) {
    'use strict';

    var wekalaApp = {
        /* ---------------------------------------------
            01. Scroll top
         --------------------------------------------- */
        scroll_top: function() {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },


        /* ---------------------------------------------
            02. Mobile Menu
        --------------------------------------------- */
        mobile_menu: function() {
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-wrap nav').meanmenu({
                meanMenuClose: 'X',
                meanMenuCloseSize: '18px',
                meanScreenWidth: '992',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu'
            });
            if ($('.menu.right-menu').length) {
                var mobileLeftMenu = $('.site-header .navigation-area .mainmenu-wrap .menu.right-menu ul li').clone().appendTo('.mobile-menu .mean-bar .mean-nav ul');
            }
        },


        /*-------------------------------------------
            03. Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length) {
                var stickyMenu = $('.site-header').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 992) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(500);
                        } else {
                            $('#sticky-header').slideUp(500);
                        }
                    }
                });
            }
        },


        /*-------------------------------------------
            04. Parallax Background
        --------------------------------------------- */
        bg_parallax: function() {
            if ($('.bg-parallax').length) {
                $('.bg-parallax').parallax("30%", -0.25);
            }
        },


        /*-------------------------------------------
            05. Aos Initializ
        --------------------------------------------- */
        aos_initializ: function() {
            AOS.init()
        },

        /*-------------------------------------------
            06. Nav scroll
        --------------------------------------------- */
        nav_scroller: function() {
            if ($('.site-header').length) {
                $('.menu ul').navScroll({
                    mobileDropdown: true,
                    mobileBreakpoint: 991,
                    scrollSpy: true,
                    navHeight: 65,
                });
            }
        },


        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {
            wekalaApp.scroll_top();
            wekalaApp.mobile_menu();
            wekalaApp.sticky_header();
            wekalaApp.bg_parallax();
            wekalaApp.aos_initializ();
            wekalaApp.nav_scroller();
        }
    };

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        wekalaApp.initializ();
    });


})(jQuery);