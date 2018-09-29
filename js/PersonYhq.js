$(function () {
    //优惠券选项卡
    $("main .pHead .pYhqT").click(function () {
        let i =$(this).index();
        $("main .pHead .pYhqT").removeClass("active").eq(i).addClass("active");
        $("main .pConttt").css("display","none").eq(i).css({display:"block"});
    });
})