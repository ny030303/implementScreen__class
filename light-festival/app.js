function onPopup() {
    $(".popup").show("slow");
}

function closePopup() {
    $(".popup").hide("fast");
}

$(() => {
    $(".menu  > ul > li > ul").hide();
    $(".gallery").hide();
    $(".popup").hide();

    $(".menu  > ul > li").hover(function(){
        $(this).children("ul").stop().slideDown();
    }, function(){
        $(this).children("ul").stop().slideUp();
    });

    let nowNum = 0;

    $(".slider > img").hide();
    $(".slider > img").eq(nowNum).show();

    setInterval(function() {
        let next = (nowNum + 1) % 3;
        $(".slider > img").eq(nowNum).stop().fadeOut();
        $(".slider > img").eq(next).stop().fadeIn();
        nowNum = next;
    }, 3000);

    $(".c-title > li").on("click", function() {
        // console.log(this.dataset.num);
        $(".c-title > li").removeClass("on");
        $(this).addClass("on");

        let num = this.dataset.num;
        if(num == 1) {
            $(".gallery").hide();
            $(".notice").show();
        } else {
            $(".notice").hide();
            $(".gallery").show();
        }
    });
})