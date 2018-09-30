$(function () {
    let dianji1=$(".weixin .shang");
    let dianji2=$(".weixin .xia");
    // console.log(dianji1,dianji2);
    dianji1.click(function () {
        dianji1.css({display:"none"});
        dianji2.css({display:"block"});
    })
    dianji2.click(function () {
        dianji1.css({display:"block"});
        dianji2.css({display:"none"});
    })
})