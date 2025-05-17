/*jslint devel: true*/
/*jslint browser: true*/
/*global $, YT*/

(function () {
    'use strict';

    $(document).ready(function () {

        var ytPoster = $('#ytPoster, .play_btn');

        // when video ends Show Poster Image
        function onPlayerStateChange(event) {
            if (event.data === 0) {
                ytPoster.fadeIn();
            }
        }

        //Detects when YouTube Ends
        function youTubeEnded() {
            // create youtube player
            var player;
            player = new YT.Player('video', {
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        //Play or Stop YouTube Video
        function playStopYouTube(action) {
            //'playVideo' or 'stopVideo' as action parameter
            $('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
        }

        //Descubrir YouTube Embed Poster
        ytPoster.on('click', function (e) {
            ytPoster.fadeOut();
            youTubeEnded();
            playStopYouTube('playVideo');
            e.preventDefault();
        });

    });

}());
