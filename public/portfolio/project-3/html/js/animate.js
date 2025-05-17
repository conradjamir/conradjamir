/*jslint devel: true*/
/*jslint browser: true*/
/*global $, jQuery, google, alert*/

(function () {

    'use strict';

    $(document).ready(function () {
        var footerLogo = $('footer .logo'),
            preOrderBtn = $('.pre_order'),
            mapInput = $('#pac-input');

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });

        footerLogo.mouseover(function () {
            $(this).attr('src', 'images/footer_logo_loop.gif');
        });
        footerLogo.mouseout(function () {
            $(this).attr('src', 'images/footer_logo.gif');
        });

        $('.delivery_1').mouseover(function () {
            $(this).animateCss('tada');
        });

        $('.delivery_2').mouseover(function () {
            $(this).animateCss('shake');
        });

        $('.delivery_3').mouseover(function () {
            $(this).animateCss('swing');
        });

        $('.delivery_4').mouseover(function () {
            $(this).animateCss('wobble');
        });

        //Detect if not mobile
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            preOrderBtn.mouseover(function () {
                $(this).popover('show');
                mapInput.animateCss('shake');
            });
            preOrderBtn.mouseout(function () {
                $(this).popover('hide');
            });
        }

        function animateWaypoint(item, animation, offSet) {
            $(item).waypoint(function () {
                $(this).animateCss(animation);
            }, {
                offset: offSet
            });
        }

        function animateWaypointOnce(item, animation, offSet) {
            $(item).waypoint(function () {
                $(this).animateCss(animation);
                $(this).attr('style', 'visibility: visible !important;'); //added visibility:hidden in css objects
            }, {
                offset: offSet,
                triggerOnce: true
            });
        }

        animateWaypoint('.coming_to_oc', 'swing', '50%');
        animateWaypoint('.place_your_free', 'swing', '50%');
        animateWaypointOnce('.profiles_1', 'fadeInLeftBig', '100%');
        animateWaypointOnce('.profiles_2', 'fadeInRightBig', '100%');
        animateWaypointOnce('.profiles_3', 'fadeInLeftBig', '100%');
        animateWaypointOnce('.profiles_4', 'fadeInRightBig', '100%');

        // scroll up map and focus on input
        $('.countdown_container .pre_order').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".map_container").offset().top
            }, 1000);
            mapInput.focus();
            mapInput.animateCss('shake');
        });

        function imageHover(selector, over, image) {
            $(selector).hover(function () {
                $(this).attr('src', 'images/' + over + '.png');
            }, function () {
                $(this).attr('src', 'images/' + image + '.png');
            });
        }

        imageHover(".instagram", "social_instagram_over", "social_instagram");
        imageHover(".snapchat", "social_snapchat_over", "social_snapchat");
        imageHover(".youtube", "social_youtube_over", "social_youtube");
        imageHover(".facebook", "social_facebook_over", "social_facebook");

    });

}());
