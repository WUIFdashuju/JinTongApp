/**
 * Created by lenovo on 2018/9/29.
 */
$(function () {
    let anum=0;
    $(".pGrayC").click(function () {
        $(this).toggleClass("activeJ");
        $(this).children().css({color:'#fff'});
    })
    $(".pChoose .pGrayCi").click(function () {
        anum++;
        if(anum%2==1){
            $(".pGrayC").addClass("activeJ");
        }else{
            $(".pGrayC").removeClass("activeJ");
        }
        $(this).toggleClass("activeJ");
    })


})