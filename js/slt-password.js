window.onload=function () {
    let yuan=document.querySelectorAll(".yuan");
    let xyuan=document.querySelectorAll(".xiaoyuan");
    for(let i=0;i<yuan.length;i++){
        yuan[i].onclick=function () {
            for(let j=0;j<yuan.length;j++){
                yuan[j].classList.remove("active");
                xyuan[j].style.display="none";
            }
            yuan[i].classList.add("active");
            xyuan[i].style.display="block";
        }
    }
    let pay=document.querySelector(".pay");
    let fugai=document.querySelector(".fugai");
    pay.onclick=function(){
        fugai.style.opacity=1;
    }
    let li=document.querySelectorAll("li");
    let yuan2=document.querySelectorAll(".yuan2");
    let cuo=document.querySelector(".cuo");
    yuan2[0].style.display="block";
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            // for(let j=0;j<li.length;j++){
            //     li[j].classList.remove("active3");
            //     yuan2[j].style.display="none";
            // }
            li[i].classList.add("active3");
            yuan2[i].style.display="block";
        }
    }
    li[4].onclick=function(){
        location.href="slt-zhifuchenggong1.html";
    }
    cuo.onclick=function () {
        fugai.style.opacity=0;
    }
}