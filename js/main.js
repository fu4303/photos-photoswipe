// Yo, mad shout outs to PhotoSwipe! https://github.com/codecomputerlove/PhotoSwipe
// Thanks for making this great product!!! :) Love ya.

$('html, body').css('background', 'black');

// CHANGE THESE VALUES TO SUITE YOUR OWN SITE
var numberOfImages = 4,
    pathToImages = 'images/',
    counter = true;

(function (window, PhotoSwipe) {

    document.addEventListener('DOMContentLoaded', function () {

        var daPicturz = [];

        for (i = 1; i <= numberOfImages; i++) {

            if (i < 10) { // just dealing with some zero padding and file naming issues.
                daPicturz.push({
                    url: pathToImages + '00' + i + '.jpg',
                    caption: ''
                });
            }
            else if (i > 9 && i < 100) {
                daPicturz.push({
                    url: pathToImages + '0' + i + '.jpg',
                    caption: ''
                });
            }
            else if (i > 99) {
                daPicturz.push({
                    url: pathToImages + i + '.jpg',
                    caption: ''
                });
            }

        }

        var
            options = {
                preventHide: true,
                allowUserZoom: false,
                captionAndToolbarShowEmptyCaptions: false,
                preventSlideshow: true,
                zIndex: '101',
                imageScaleMethod: 'zoom',
                captionAndToolbarAutoHideDelay: 3333,
                getImageSource: function (obj) {
                    return obj.url;
                },
                getImageCaption: function (obj) {
                    return obj.caption;
                }
            },

            instance = PhotoSwipe.attach(daPicturz, options);

        // append a neato counter to the image gallery
        if (counter) {
            $(document).ready(function() {
                $('body').prepend('<div class="counter">1/' + daPicturz.length + '</div>');
            });
        }

        instance.addEventHandler(PhotoSwipe.EventTypes.onDisplayImage, function(e) {
            $('.counter').html(e.index + 1 + '/' + daPicturz.length);
        });

        instance.show(0);

    }, false);

})(window, window.Code.PhotoSwipe);

$(window).load(function () {
    // if we have a desktop sized screen add in some instructions for the user
    if ($(window).width() >= 1024) {
        $('.ps-toolbar-content').attr('title', 'Use the keyboard arrow keys as well!');
    }
});
