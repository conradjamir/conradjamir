/*jslint devel: true*/
/*jslint browser: true*/
/*global $, jQuery, google*/

(function () {

    'use strict';

    var map,
        geocoder,
        marker,
        circle,
        bounds,
        windowWidth = $(window).width(),
        lat = 33.6588037,
        lng = -117.8738706,
        center = new google.maps.LatLng(lat, lng), // center of location
        iconBase = 'images/',
        styleArray = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];

    function preOrder() {
        var inputForm = $("input.form-control"),
            inputAddress = $("#pac-input"),
            inputAddressVal = inputAddress.val(),
            modalId = "#preOrderModal",
            modalName = modalId + " " + "#name",
            modalAddress = modalId + " " + "#address",
            modalHiddenAddress = modalId + " " + "#hidden-address";

        $(modalId).modal('show');

        // get input data and assign to form fields
        $(modalAddress + ", " + modalHiddenAddress).val(inputAddressVal);

        $(modalId).on('shown.bs.modal', function () {
            $(modalName).focus();
        });

        $(modalId).on('hidden.bs.modal', function () {
            //reset form fields
            inputAddress.val("");
            inputForm.val("");
            $("input[name=age]").prop('checked', false);
            $("#contact_results").html('');
        });
    }

    function outOfBounds() {
        var modalId = "#outOfBounds";
        $(modalId).modal('show');
    }

    function geocodeAddress(addr) {

        geocoder.geocode({
            'address': addr
        }, function (results, status) {

            if (status === 'OK') {

                /*
                    sets new map marker and resizes map
                    //var newBounds = new google.maps.LatLngBounds(bounds.getSouthWest(), bounds.getNorthEast());
                    //marker.setPosition(results[0].geometry.location);
                    //marker.setMap(map);
                    //newBounds.extend(results[0].geometry.location);
                    //map.fitBounds(newBounds);
                */

                if (google.maps.geometry.spherical.computeDistanceBetween(circle.center, results[0].geometry.location) <= circle.radius) {
                    // order modal
                    preOrder();
                } else {
                    // status mmodal
                    outOfBounds();
                }
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    function initMap() {

        // create map
        map = new google.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: 12,
            panControl: false,
            draggable: false,
            mapTypeControl: false,
            zoomControl: false,
            fullscreenControl: false,
            scrollwheel: false,
            streetViewControl: false,
            scaleControl: false,
            cameraControl: false,
            gestureHandling: 'none',
            clickableIcons: false,
            styles: styleArray
        });

        // detect window set and reset map zoom for responsive
        if (windowWidth <= 414) {
            map.setZoom(11);
        } else {
            map.setZoom(12);
        }

        // content of info window
        var contentString = '<div id="content">This is a test' +
            '</div>',
            // init info window
            infowindow = new google.maps.InfoWindow({
                content: contentString
            }),
            // define the input for autocomplete
            input = (document.getElementById('pac-input')),
            types = document.getElementById('type-selector'),
            autocomplete = new google.maps.places.Autocomplete(input);

        // offset center of map in view
        //map.panBy(50, -95);

        // init geocoder library
        geocoder = new google.maps.Geocoder();

        // boundary of map
        bounds = new google.maps.LatLngBounds();

        google.maps.event.addListenerOnce(map, 'tilesloaded', function (evt) {
            bounds = map.getBounds();
        });

        // on window resize, recenter and set map zoom based on window width
        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter(),
                windowWidth = $(window).width();

            google.maps.event.trigger(map, "resize");
            map.setCenter(center);

            if (windowWidth <= 414) {
                map.setZoom(11);
            } else {
                map.setZoom(12);
            }

        });

        // marker position
        marker = new google.maps.Marker({
            position: center,
            icon: iconBase + 'grunge_pin.svg', //custom marker
            id: 'marker'
        });

        // set marker
        marker.setMap(map);

        // create the radius circle object
        circle = new google.maps.Circle({
            geodesic: true,
            strokeColor: 'transparent',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: 'transparent',
            fillOpacity: 0.35,
            center: {
                lat: lat,
                lng: lng
            },
            radius: 8046.70 //in meters = 5 miles or 16093.40 in meters = 10 miles
        });

        // init circle radius on map
        circle.setMap(map);

        // position input inside map
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        //
        autocomplete.addListener('place_changed', function () {

            var place = autocomplete.getPlace(), // get results from Autocomplete
                newBounds = new google.maps.LatLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

            // if input entered does not match autocomplete
            if (!place.geometry) {

                geocodeAddress(input.value);

                outOfBounds();

                return;
            }

            if (google.maps.geometry.spherical.computeDistanceBetween(circle.center, place.geometry.location) <= circle.radius) {
                preOrder();
            } else {
                outOfBounds();
            }
        });
    }

    //window.onload = initMap;
    $(document).ready(function () {
        initMap();
    });

}());
