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

    // STICKY NAVBAR

    $(window).on('scroll', function() {
        if($(window).scrollTop()){
            $('nav').addClass('solid');
        }
        else {
            $('nav').removeClass('solid');
        }
    });

    // BURGER MENU SETTINGS

    $('#burger-icon').click(function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('mobile-show');
        $('.alt-nav .mobile-menu').toggleClass('mobile-show');
        $('nav').toggleClass('coloured');
    });

    // REVERT NAVBAR TO NORMAL AFTER CLICKING A LINK */
    $(".mobile-menu a").click(function() {
        $(".mobile-menu").toggleClass("mobile-visible");
        $(".icon").toggleClass("open");
      });
    
});