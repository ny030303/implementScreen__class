$(()=> {
    $(".menu > ul > li > ul").hide();

    $(".menu  > ul > li").hover(function(){
        $(this).children("ul").show();
    }, function(){
        $(this).children("ul").hide();
    });
})