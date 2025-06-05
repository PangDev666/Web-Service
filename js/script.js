$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-time');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.amount input').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            300,
            'linear'
        );
    });
});