$(function () {
    let wenb=$("main .bottom .wenb");
    let yuy=$("main .bottom .wenb .yuy span")
    console.log(wenb,yuy);
    wenb.click(function () {
      let move=function (){
         return yuy.css("height",function(){return Math.random()*0.4+"rem";}          )}
        console.log(move);
        setInterval(move,500);
    })
})
