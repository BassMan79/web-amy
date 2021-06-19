$(document).ready(function () {

    $(window).scroll(function(){
        
        alturaTotal = $(document).height();
        alturaScroll = $(this).scrollTop();
        alturaViewport = $(this).height();

        if (alturaTotal == alturaScroll + alturaViewport || alturaScroll >= 937) {
            $('#scrollUp').fadeIn(400);
        }else{
            $('#scrollUp').fadeOut(400);
        }
    })

    //ScrollUp
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //Artist Effects
    $(function() {
        $('#sti-menu').iconmenu({
            animMouseenter	: {
                'mText' : {speed : 300, easing : 'easeOutExpo', delay : 0, dir : 1},
                'sText' : {speed : 600, easing : 'easeOutExpo', delay : 400, dir : 1},
                'icon'  : {speed : 200, easing : 'easeOutExpo', delay : 0, dir : 1}
            },
            animMouseleave	: {
                'mText' : {speed : 200, easing : 'easeInExpo', delay : 150, dir : 1},
                'sText' : {speed : 200, easing : 'easeInExpo', delay : 0, dir : 1},
                'icon'  : {speed : 200, easing : 'easeInExpo', delay : 300, dir : 1}
            }
        });
    });
});