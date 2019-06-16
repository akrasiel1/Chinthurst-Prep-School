$( document ).ready(function() {

    
    // SET BROWSER
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    //SET CURRENT YEAR
    $('#year').text(new Date().getFullYear());

    //SET LIGHTSLIDER
    $("#testimonials").lightSlider({
        item: 1,
        loop: true,
        speed: 750,
        pauseOnHover: true,
        mode: 'slide',
        auto: true,
        pause: 8000
    });


});