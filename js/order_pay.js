$(function(){
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
})



