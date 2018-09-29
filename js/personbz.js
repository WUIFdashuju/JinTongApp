$(function () {
    let dianji=$(".order .top");
    let tanchu=$(".tanchu");
    let yincang=$(".order");
    // console.log(dianji,tanchu);
    dianji.click(function () {
        tanchu.css({display:"block"});
        yincang.css({opacity:"0"});
    })
})