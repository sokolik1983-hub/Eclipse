$(".mnav__open").click(function() {
    $(".mnav__dropdown").css({ "display":"block" });
    $(".mnav__close").css({ "display":"block" });
    $(".mnav__open").css({ "display":"none" });


})
$('.mnav__close').click(function() {
    $(".mnav__close").css({ "display":"none"});
    $(".mnav__open").css({ "display":"block" });
    $(".mnav__dropdown").css({ "display":"none" });

});

$('.dropdown ').click(function(event){
    event.stopPropagation();
});

$(function(){

    $('.scroll_to_2nd_page').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#second_page').offset().top }, 1000);
        e.preventDefault();
    });

});
$(function(){

    $('.scroll_to_3rd_page').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#third_page').offset().top }, 1000);
        e.preventDefault();
    });

});

$(function(){

    $('.scroll_to_4th_page').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#fourth_page').offset().top }, 1000);
        e.preventDefault();
    });

});
$(function(){

    $('.scroll_to_1st_page').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#first_page').offset().top }, 1000);
        e.preventDefault();
    });

});
$('.portfolio_slider__cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});