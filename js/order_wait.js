$(function () {
    let dot=$(".dots");
    let dots=$("nav>span");
    dot.click(function () {
        location.href="order_track.html";
    })
    dots.click(function () {
        location.href="order_track.html";
    })
    let back=$(".backs");
    back.click(function () {
        location.href="order_pay.html";
    })
    let pay=$(".pay");
    pay.click(function () {
        location.href="order_write.html";
    })
})