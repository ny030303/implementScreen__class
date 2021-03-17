function onPopup() {
    $(".popup").show("slow");
}

function closePopup() {
    $(".popup").hide("fast");
}

$(() => {
    $(".sub-menu").hide();
    $(".popup").hide();
    // $(".c-left > div").hide();

    $(".menu > li").hover(function() {
        $(this).children().stop().slideDown();
    }, function(e) {
        $(".sub-menu").stop().slideUp();
    });

    let num = 0;
    $(".slider > img").hide();
    $(".slider > img").eq(num).show();
    setInterval(() => {
        let next = (num + 1) % 3;
        $(".slider > img").eq(num).fadeOut(1500);
        $(".slider > img").eq(next).fadeIn(1500);
        num = next;
    }, 3000);


    $(".c-left-title > li").on("click", function(e) {
        $(".c-left-title > li").removeClass("on");
        $(".c-left > div").removeClass("on");

        $(e.target).addClass("on");
        $(".c-left > div").eq(e.target.dataset.num).addClass("on");
    });
})