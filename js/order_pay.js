$(function(){
    // 选项卡
    let lis=$("nav>ul li.lis");
    let bots=$("nav>ul>li>.bots");
    let list=$("main>.list");
    console.log(lis, bots, list);
    lis.click(function () {
        let i=$(this).index();
        lis.removeClass("choose").eq(i).addClass("choose");
        bots.removeClass("chooses").eq(i).addClass("chooses");
        list.css("display","none").eq(i).css("display","block");
    })
    lis.eq(1).triggerHandler("click");
    // 点击跳转
    let serve=$(".list_serve>dl");
    serve.click(function () {
        location.href="order_wait.html";
    })
    let pay=$(".list_serve .sel_pay");
    pay.click(function () {
        location.href="order_write.html";
    })
    let assess=$(".list_assess .sel_pay");
    assess.click(function () {
        location.href="order_assess.html";
    })
})



