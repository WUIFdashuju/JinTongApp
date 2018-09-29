$(function () {
    // 返回
    let back=$(".backs");
    back.click(function () {
        location.href="order_pay.html";
    })

    // 星星选中效果
    let star=$(".img_assess .stars>.star");
    let blue_star=$(".img_assess .blue_stars>.blue_star");
    let describe=$(".img_assess .spans>.assess_describe");
    console.log(star, blue_star, describe);
    star.click(function () {
        let i=$(this).index();
        blue_star.css("display","none").eq(i).css("display","block").prevAll(i).css("display","block");
        describe.css("display","none").eq(i).css("display","block");
    })
    let grade_star=$(".grade .logistics>.stars>img");
    let grade_blue_star=$(".grade .logistics>.blue_stars>img");
    let grade_describe=$(".grade .logistics>.spans>span");
    console.log(grade_star, grade_blue_star, grade_describe);
    grade_star.click(function () {
        let j=$(this).index();
        grade_blue_star.css("display","none").eq(j).css("display","block").prevAll(j).css("display","block");
        grade_describe.css("display","none").eq(j).css("display","block");
    })
    let attitude_star=$(".grade .attitude>.stars>img");
    let attitude_blue_star=$(".grade .attitude>.blue_stars>img");
    let attitude_describe=$(".grade .attitude>.spans>span");
    console.log(attitude_star, attitude_blue_star, attitude_describe);
    attitude_star.click(function () {
        let k=$(this).index();
        attitude_blue_star.css("display","none").eq(k).css("display","block").prevAll(k).css("display","block");
        attitude_describe.css("display","none").eq(k).css("display","block");
    })

    // 文本框
    let input=$(".img_assess>.text>textarea");
    let note=$(".img_assess>.text>.note");
    input.focus(function () {
        note.css("display","none");
    })

})