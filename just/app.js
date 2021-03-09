console.log($);
function onPopup() {
    $(".popup").show("slow");
}

function hidePopup() {
    $(".popup").hide("fast");
}
$(() => {
    $(".nav-list > li > ul").hide();
    $(".popup").hide();

    $(".nav-list > li").hover(function() {
        $(".nav-list > li ul").stop().slideDown();
    }, function(){
        $(".nav-list > li ul").stop().slideUp();
    });

    $(".notice .titles li").on("click", function(e) {
        $(".notice .titles li").removeClass("on");
        e.target.classList.add("on");

        let num = Number($(e.target).attr("data-num"));
        // console.log(num);
        if(num==2) {
            $(".notice-table").hide();
            $(".gallery").show();
        } else {
            $(".gallery").hide();
            $(".notice-table").show();
        }
        // $(".notice-box > div").removeClass("hidden");
        // $(".notice-box > *").eq(num).addClass("hidden");
        
    });

    $(".slider img").css({"top": "-100%"});
    $(".slider img").eq(0).css({"top": "0"});

    let idx = 0;

    setInterval(()=> {
        let next = (idx +1) % 3;
        $(".slider img").eq(next).css({"top": "-100%"}).stop().animate({"top": "0"}, 1200);
        $(".slider img").eq(idx).stop().animate({"top": "100%"}, 1200);
        idx = next;
    }, 3000);


    
});