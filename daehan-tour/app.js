
function showModal() {
    $(".modal").show();
}

function closeModal() {
    $(".modal").hide();
} 

$(() => {
    
    $(".modal").hide();

    $("nav > ul > li > ul").hide();
    $(".nav-dark").hide();
    $("nav > ul > li").hover(function(){
        $(".nav-dark").stop().slideDown();
        $(".sub").stop().slideDown();
    }, function(){
        $(".nav-dark").stop().slideUp();
        $(".sub").stop().slideUp();
    })

    $(".slide > img").css({"top": "-100%"});
    let num = 0;
    $(".slide > img").eq(num).css({"top": 0});

    setInterval(() => {
        let next = (num + 1) % 3;
        console.log(next);
        $(".slide > img").eq(num).stop().animate({"top": "100%"}, 400);
        $(".slide > img").eq(next).css({"top": "-100%"}).stop().animate({"top": 0}, 400);
        num = next;
    }, 3000);
})