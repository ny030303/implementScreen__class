function onPopup() {
    $(".popup").show("slow");
}

function hidePopup() {
    $(".popup").hide("fast");
}

$(() => {
    $(".sub-menu").hide();
    $(".menu-back").hide();
    $(".popup").hide();

    $(".menu > li").hover(function(){
        $(this).children().stop().slideDown();
    }, function() {
        $(".sub-menu").stop().slideUp();
    });

    $(".slider img").css("left", "100%");
    $(".slider img").eq(0).css("left", "0");

    let num = 0;

    setInterval(function() {
        let next = (num + 1) % 3;

        $(".slider img").eq(num).stop().animate({"left": "-100%"}, 1500);
        $(".slider img").eq(next).css({"left": "100%"}).stop().animate({"left": "0"}, 1500);
        num = next;
    }, 3000);
})