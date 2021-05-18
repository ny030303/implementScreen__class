function showModal() {
    $(".modal").show();
}

function hideModal() {
    $(".modal").hide();
}

$(() => {
    $(".modal").hide();
    
    $("nav > ul > li > ul").hide();

    $("nav > ul > li").hover(function() {
        $(this).children("ul").stop().slideDown();
    },function() {
        $(this).children("ul").stop().slideUp();
    });

    
    let num = 0;

    $(".slide > img").hide();
    $(".slide > img").eq(num).show();

    setInterval(()  => {
        let next = (num + 1) % 3;
        $(".slide > img").eq(num).stop().fadeOut();
        $(".slide > img").eq(next).stop().fadeIn();
        num = next;
    }, 3000);
});