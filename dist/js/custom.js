

$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto:true,
    });
    $('.testimonial-slide').bxSlider({
        auto:true,
        pager:false,
        slideMargin:10
    });

    $(".nav-header span").click(function(){
        $(".navbar-full ul").stop(true,false).slideToggle();
    });

});
