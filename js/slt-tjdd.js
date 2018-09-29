


$(function () {
    //填写订单 优惠券
    $(".discount .right").click(function () {
        // $(".cover").css("display","block");
        $(".cover").fadeIn("slow");
        // $(".cover .cuo").fadeIn("slow");
        $(".cover .bottom1").addClass("active");

    })
    $(".cover .cuo").click(function () {
        $(".cover").fadeOut("slow");
    })
    $(".cover .close .list").click(function () {
        $(".cover").fadeOut("slow");
    })
    $(".bottom ul li").click(function () {
        let i=$(this).index();
        // console.log(i);
        $(".bottom ul li").removeClass("active").eq(i).addClass("active");
    })

    //填写订单  价钱
    let i=1;
    $(".order .shuzi").text(`01`);
    $(".shop .right .sixty").text(`60.00`);
    $("footer .left .price").text(`60.00`);
    $(".order .jia").click(function () {
        i++;
        $(".order .shuzi").text(`0${i}`);
        if(i>=10){
            $(".order .shuzi").text(`${i}`);
        }
        $(".shop .right .sixty").text(`${i*60}`);
        $("footer .left .price").text(`${i*60}`);
    })
    $(".order .jian").click(function () {
        i--;
        $(".order .shuzi").text(`${i}`);
        if(i<10 && i>=1){
            $(".order .shuzi").text(`0${i}`);
        }if(i<1){
            i=1;
            $(".order .shuzi").text(`01`);
        }
        $(".shop .right .sixty").text(`${i*60}`);
        $("footer .left .price").text(`${i*60}`);

    })



    //填写地址
    // $(".zeng").click(function () {
    //     $(".address").css("display","none");
    //     $(".clear").css("display","none");
    //     $(".address1").css("display","none");
    //     $(".new").css("display","none");
    //     $(".imassage").css("display","block");
    //     $(".imassage1").css("display","block");
    //     $(".save").css("display","block");
    //     $(".add").css("display","none");
    //     $(".tu").css("display","none");
    //     $(".zeng").css("display","none");
    // })
    // $(".new").click(function () {
    //     $(".address").css("display","none");
    //     $(".clear").css("display","none");
    //     $(".address1").css("display","none");
    //     $(".new").css("display","none");
    //     $(".imassage").css("display","block");
    //     $(".imassage1").css("display","block");
    //     $(".save").css("display","block");
    //     $(".add").css("display","none");
    //     $(".tu").css("display","none");
    //     $(".zeng").css("display","none");
    // })
    // $(".save").click(function () {
    //     $(".imassage").css("display","none");
    //     $(".imassage1").css("display","none");
    //     $(".save").css("display","none");
    //     $(".address").css("display","flex");
    //     $(".clear").css("display","flex");
    //     $(".address1").css("display","flex");
    //     $(".new").css("display","block");
    // })



    //卫浴
    $(".sale ul li .one1").css("color","#36d681");
    $(".sale ul li .down1 i").css("color","#36d681");
    $(".sale ul li").click(function () {
        let i=$(this).index();
        $(".sale ul li p").css("color","#4ebbfe").eq(i).css("color","#36d681");
        $(".sale ul li .down i").css("color","#4ebbfe").eq(i).css("color","#36d681");
        // $(".kuai").css("display","none").eq(i).css("display","block");
        $(".kuai").eq(i).slideToggle();
    })

    // let word=document.querySelectorAll(".sale ul li");
    // let word1=document.querySelectorAll(".sale ul li p");
    // let down=document.querySelectorAll(".sale ul li .down i");
    // let kuai=document.querySelectorAll(".kuai");
    // for(let i=0;i<word.length;i++){
    //     word[i].onclick=function () {
    //         for(let j=0;j<word1.length;j++){
    //             word1[j].style.color="#4ebbfe";
    //             down[j].style.color="#4ebbfe";
    //             kuai[j].style.display="none";
    //
    //         }
    //         word1[i].style.color="#36d681";
    //         down[i].style.color="#36d681";
    //         kuai[i].style.display="block";
    //     }
    // }
    //


    //店铺
    $(".select-all .select2").css("background","#3bacfe");
    $(".select-all .select2 .word2").css("color","#fff");
    $(".select-all .select1").click(function () {
        console.log(1);
        let i=$(this).index();
        $(".select-all .select1").css("background","#E7F6FF").eq(i).css("background","#3bacfe");
        $(".select-all .select1 .word").css("color","#3bacfe").eq(i).css("color","#fff");
    })


})