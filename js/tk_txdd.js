window.onload=function(){
    let main=document.querySelectorAll("main");
    let title=document.querySelectorAll(".dayy");
    main[0].style.display="block";
    for(let i=0;i<main.length;i++){
        title[i].onclick=function(){
            for(let j=0;j<title.length;j++){
                main[j].style.display="none";
                title[j].classList.remove("bottom");
            }
            main[i].style.display="block";
            title[i].classList.add("bottom");
        }
    }
    let li=document.querySelectorAll(".oone li");
    let zi=document.querySelectorAll(".oone li p");
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            for (let j=0;j<li.length;j++){
                li[j].classList.remove("beij");
                zi[j].classList.remove("ziti");
            }
            li[i].classList.add("beij");
            zi[i].classList.add("ziti");
        }
    }
    let li1=document.querySelectorAll(".twoo li");
    let zi1=document.querySelectorAll(".twoo li p");
    for(let i=0;i<li.length;i++){
        li1[i].onclick=function(){
            for (let j=0;j<li1.length;j++){
                li1[j].classList.remove("beij");
                zi1[j].classList.remove("ziti");
            }
            li1[i].classList.add("beij");
            zi1[i].classList.add("ziti");
        }
    }
    let li2=document.querySelectorAll(".three li");
    let zi2=document.querySelectorAll(".three li p");
    for(let i=0;i<li2.length;i++){
        li2[i].onclick=function(){
            for (let j=0;j<li2.length;j++){
                li2[j].classList.remove("beij");
                zi2[j].classList.remove("ziti");
            }
            li2[i].classList.add("beij");
            zi2[i].classList.add("ziti");
        }
    }
    let cuo=document.querySelector(".cuo");
    let zhezhao=document.querySelector(".zhezhao");
    let dibu=document.querySelector(".dibu");
    let fukuan=document.querySelector(".right22");
    cuo.onclick=function(){
        zhezhao.style.height="0";
        zhezhao.style.boxShadow="none";
    }
    dibu.onclick=function(){
        zhezhao.style.height="0";
        zhezhao.style.boxShadow="none";
    }
    fukuan.onclick=function(){
        zhezhao.style.height="8.2rem";
        zhezhao.style.boxShadow="0 0 0.01rem 10rem rgba(0,0,0,0.5)";
    }
}