/*jslint devel: true*/
/*jslint browser: true*/
/*global $, jQuery*/

(function () {

    'use strict';

    $(document).ready(function () {

        var dateObj = new Date(),
            month = dateObj.getUTCMonth() + 1, //months from 1-12
            day = dateObj.getUTCDate() - 1, // daylight savings
            year = dateObj.getUTCFullYear(),
            currentDate = year + "/" + month + "/" + day,
            expiresOn = '2025/5/17', //ex.: '2017/05/19 07:25:56' '2017/06/10'
            timer = $('#timer'),
            ctaOrderBtn = $(".pre_order"),
            orderInput = $('.pre_order_input'),
            remindMe = $("#remind_me"),
            reminderBtn = $("#reminder_btn"),
            comingToOc = $(".coming_to_oc"),
            placeYourFree = $(".place_your_free"),
            modalOrderHeading = $(".modal_order_heading"),
            orderDescription = $(".order_description"),
            orderPlaced = $(".order_placed"),
            orderPlacedText = $(".order_placed_text"),
            inputAddress = $("#pac-input"),
            subject = $("input[name=subject]");

        function swapToOrder() {
            timer.hide();
            comingToOc.hide();
            placeYourFree.css('display', 'block');
            orderDescription.html('<p>Get Milk + Pizza delivered to you in the<br>most epic way imaginable.</p><p>There’s a limited number of 150 orders, so don’t sleep on it. Enter your address to confirm you’re within the delivery radius and fill out your details.</p><p>Watch all the action <a href="https://www.instagram.com/boneslovemilk/" target="_blank">@boneslovemilk</a>.');
            orderDescription.css("margin", "40px");
            modalOrderHeading.html('We got your back… and your shins… and your skull.<br><span style="font-weight:bold; text-decoration: underline;">Enter the Freestyle Delivery promotion for a chance to win our free milk and pizza</span>.');
            orderPlacedText.html('Your order is getting baked. Check <a href="https://www.instagram.com/boneslovemilk/" target="_blank">@boneslovemilk</a> to watch your freestyle delivery make its way.');
            subject.val("Order - Freestyle Delivery");
        }

        function swapToReminder() {
            ctaOrderBtn.hide();
            orderInput.hide();
            orderDescription.html('<p style="font-size: 18px;">Don’t trip though, we’ll be back online taking live orders on June 10<sup>th</sup>.</p><p style="font-size: 18px;">Need a reminder? Click below.</p>')
            orderDescription.css('margin', "20px");
            comingToOc.attr('src', 'images/we_are_tapped_out.png');
            modalOrderHeading.html('We got your back... and your shins... and your skull.<br>Enter your insta handle below for a reminder. <a href="#" class="rules">Rules</a>');
            orderPlacedText.html('Got it homie! We’ll hit you up on Instagram.<br><a href="https://www.instagram.com/boneslovemilk/" target="_blank">@boneslovemilk</a>');
            subject.val("Reminder - Freestyle Delivery");
            inputAddress.hide();
            remindMe.show();
            reminderBtn.show();
            remindMe.on('click', function () {
                $("#preOrderModal").modal('show');
            });
        }
        $('.pause').click(function () {
            timer.countdown('pause');
        });

        $('.resume').click(function () {
            timer.countdown('resume');
        });

        function initTimer() {
            timer.countdown(expiresOn, function (event) {
                var $this = $(this).html(event.strftime(
                    '<table class="counter table table-condensed">' +
                    '<tr class="number">' +
                    '<td>%D</td>' +
                    '<td>%H</td>' +
                    '<td>%M</td>' +
                    '</tr>' +
                    '<tr class="timer-label">' +
                    '<td>DAYS</td>' +
                    '<td>HOURS</td>' +
                    '<td>MINUTES</td>' +
                    '</tr>' +
                    '</table>'
                ));
            }).on('finish.countdown', swapToOrder);
        }

        //        if (currentDate >= expiresOn) {
        //            swapToOrder();
        //        } else {
        //            initTimer();
        //        }

        // initTimer();

        swapToOrder();
        // swapToReminder();
    });

}());
