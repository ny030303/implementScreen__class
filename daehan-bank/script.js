function onPopup() {
    $(".popup").show();
}

function offPopup() {
    $(".popup").hide();
}

$(()=> {
    $(".sub-menu").hide();
    $(".popup").hide();

    $("nav > .main-menu > li").hover(function(){
        $(".sub-menu").stop().slideDown();
    }, function() {
        $(".sub-menu").stop().slideUp();
    });

    $(".slide > img").css({left: "100%"});
    let now = 0;
    $(".slide > img").eq(now).css({left: "0"});
    setInterval(() => {
        let next = (now + 1) % 3;
        $(".slide > img").eq(now).stop().animate({left: "-100%"}, 600);
        $(".slide > img").eq(next).css({left: "100%"}).stop().animate({left: "0"}, 600);
        now = next;
    }, 3000);


    $(".con-titles").on("click", function(e) {
        // console.log(e.target.dataset.num);
        $(".con-title").removeClass("on");
        $(".boxs > .info, .boxs > .gallery").removeClass("on");
        $(".con-title").eq(Number(e.target.dataset.num) -1).addClass("on");
        if(e.target.dataset.num == 1) {
            $(".boxs > .info").addClass("on");
        } else if(e.target.dataset.num == 2) {
            $(".boxs > .gallery").addClass("on");
        }
    });
})