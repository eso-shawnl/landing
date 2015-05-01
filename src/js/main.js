;(function($){
    var $overlay = $(".primary-section .panel-overlay"),
        $starter = $("#starter-button"),
        $section2 = $("#secondary-section");
    $(window).on('mousewheel',
        function(e) {
            console.log('test');
            e.preventDefault();
            e.stopPropagation();
        }
    );

    $starter.click(function(){
        $('html, body').animate({
           scrollTop: $section2.offset().top
        }, 1200);
    });

})(jQuery);
