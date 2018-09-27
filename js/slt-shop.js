window.onload=function(){
    let click1=document.querySelectorAll(".click-one");
    let foot=document.querySelectorAll("footer");
    let p1=document.querySelectorAll(".add");
    let blue=document.querySelectorAll(".blue");
    let sjx=document.querySelectorAll(".sjx1");
    let list1=document.querySelectorAll(".list1");
    // let boxactive=document.querySelector(".boxactive");
    // let active=document.querySelector(".active");
    console.log(click1,foot,blue,sjx,list1);
    click1[0].classList.add("boxactive");
    blue[0].classList.add("libottom");
    p1[0].classList.add("active");
    sjx[0].style.display="block";
    for(let i=0;i<click1.length;i++){
        click1[i].onclick=function(){
            for(let j=0;j<click1.length;j++){
                click1[j].classList.remove("boxactive");
                blue[j].classList.remove("libottom");
                p1[j].classList.remove("active");
                foot[j].style.display="none";
            }
            click1[i].classList.add("boxactive");
            blue[i].classList.add("libottom");
            p1[i].classList.add("active");
            foot[i].style.display="block";
        }
    }

    for(let i=0;i<blue.length;i++){
        blue[i].onclick=function(){
            for(let j=0;j<blue.length;j++){
                blue[j].classList.remove("libottom");
                sjx[j].style.display="none";
                list1[j].style.display="none";
            }
            blue[i].classList.add("libottom");
            sjx[i].style.display="block";
            list1[i].style.display="block";
        }
    }


    let hp=document.querySelectorAll(".navCommit li");
    let commitAll=document.querySelectorAll(".commitAll");
    console.log(hp,commitAll);
    for(let i=0;i<hp.length;i++){
        hp[i].onclick=function(){
            for(let j=0;j<hp.length;j++){
                hp[j].style.borderBottom="";
                hp[j].style.color="";
                commitAll[j].style.display="none";
            }
            hp[i].style.borderBottom="0.07rem solid #3bacfe";
            hp[i].style.color="#3bacfe";
            commitAll[i].style.display="block";
        }
    }
}