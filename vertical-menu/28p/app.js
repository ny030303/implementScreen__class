$(()=> {
    $(".menu > ul > li > ul").hide();

    $(".menu  > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    }, function(){
        $(this).children("ul").stop().slideUp();
    });
})