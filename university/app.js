function onPopup() {$(".popup").stop().show("slow");}
function closePopup() {$(".popup").stop().hide("fast");}

$(() => {
    $(".sub-menu").hide();
    $(".popup").hide();


    $(".menu-wrap").hover(function() {
        $(".sub-menu").stop().slideDown();
    }, function() {
        $(".sub-menu").stop().slideUp();
    });


    $(".slider > img").css({"left": "-100%"});
    $(".slider > img").eq(0).css({"left": "0"});
    let num = 0;

    setInterval(function() {
        let next = (num+1) % 3;
        $(".slider > img").eq(num).stop().animate({"left": "100%"}, 1500);
        $(".slider > img").eq(next).css({"left": "-100%"}).stop().animate({"left": "0"}, 1500);
        num = next;
    }, 3000);
})