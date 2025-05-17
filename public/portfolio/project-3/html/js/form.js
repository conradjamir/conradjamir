/*jslint devel: true*/
/*jslint browser: true*/
/*global $, jQuery, google, FormData*/

(function () {

    'use strict';

    $(document).ready(function () {

        var allModals = $(".modal"),
            orderPlaced = $(".order_placed"),
            orderForm = $(".order_form"),
            inputAddress = $("#pac-input"),
            inputAge = $("input[name=age]"),
            formResults = $(".contact_results"),
            floodLight = $("#floodlight");
        
        function floodlight() {
            var axel = Math.random() + "",
                a = axel * 10000000000000,
                iframeFloodlight = '<iframe src="https://5922704.fls.doubleclick.net/activityi;src=5922704;type=confi0;cat=frees0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
            
            floodLight.append(iframeFloodlight);
        }
        
        function trackConv(google_conversion_id, google_conversion_label) {
            var image = new Image(1, 1); 
            image.src = "//www.googleadservices.com/pagead/conversion/" + google_conversion_id + "/?label=" + google_conversion_label;  
        }

        orderPlaced.hide(); //hide modal order confirmation on load

        allModals.on('shown.bs.modal', function () {
            inputAge.change(function () {
                if (this.checked) {
                    $(this).val('Yes');
                } else {
                    $(this).val("");
                }
            });
        });

        allModals.on('hidden.bs.modal', function () {
            orderForm.show();
            orderPlaced.hide();
            inputAddress.val("");
            formResults.html("");
            inputAge.val("");
            $("#preOrderModal").css('overflow-y', 'scroll');
            floodLight.html("");
        });

        //fix scrolling freeze when rules modal opens on top of order modal
        $("#rules").on('hidden.bs.modal', function () {
            var orderModalShown = $('#preOrderModal').is(':visible');

            if (orderModalShown) {
                $("body").addClass('modal-open');
            } else {
                $("body").removeClass('modal-open');
            }

        });

        // pre-order and order submit
        $("#submit_btn").on("click", function () {
            //data to be sent to server         
            var m_data = new FormData();
            m_data.append('name', $('input[name=name]').val());
            m_data.append('address', $('input[name=hidden_address]').val());
            m_data.append('phone', $('input[name=phone]').val());
            m_data.append('instagram', $('input[name=instagram]').val());
            m_data.append('age', $('input[type=checkbox]').val());
            m_data.append('subject', $('input[name=subject]').val());

            //instead of $.post() we are using $.ajax()
            //that's because $.ajax() has more options and flexibly.
            $.ajax({
                url: 'send_order.php',
                data: m_data,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    var output;
                    //load json data from server and output message     
                    if (response.type === 'error') {
                        output = '<div class="alert alert-danger" role="alert">' + response.text + '</div>';
                    } else {
                        output = '<div class="alert alert-success" role="alert">' + response.text + '</div>';
                        //reset fields
                        $("input.form-control").val("");
                        $("input[name=age]").prop('checked', false);
                        orderForm.hide();
                        orderPlaced.show();

                        //facebook pixel
                        fbq('track', 'CompleteRegistration', {
                            value: 25.00,
                            currency: 'USD'
                        });
                        
                        floodlight();
                        trackConv(851210516, 'xayiCMHh63EQlOLxlQM');
                        trackConv(849823311, 'dnlXCLqn_nEQz4ydlQM');
                    
                    }
                    
                    formResults.hide().html(output).show();
                }
            });
        });

        // reminder submit
        $("#reminder_btn").on("click", function () {
            //data to be sent to server         
            var m_data = new FormData();
            m_data.append('instagram', $('input[name=instagram]').val());
            m_data.append('subject', $('input[name=subject]').val());

            //instead of $.post() we are using $.ajax()
            //that's because $.ajax() has more options and flexibly.
            $.ajax({
                url: 'send_reminder.php',
                data: m_data,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    var output;
                    //load json data from server and output message     
                    if (response.type === 'error') {
                        output = '<div class="alert alert-danger" role="alert">' + response.text + '</div>';
                    } else {
                        output = '<div class="alert alert-success" role="alert">' + response.text + '</div>';
                        //reset fields
                        $("input.form-control").val("");
                        orderForm.hide();
                        orderPlaced.show();

                        //facebook pixel
                        fbq('track', 'CompleteRegistration', {
                            value: 25.00,
                            currency: 'USD'
                        });
                        
                        floodlight();
                        trackConv(851210516, 'xayiCMHh63EQlOLxlQM');
                        trackConv(849823311, 'dnlXCLqn_nEQz4ydlQM');

                    }
                    
                    formResults.hide().html(output).show();
                }
            });
        });
    });

}());
