$(function () {
    // 返回
    let back=$(".backs");
    back.click(function () {
        location.href="order_pay.html";
    })

    // 文本框
    let input=$(".upload>input");
    input.focus(function () {
        $(this).attr("placeholder","");
    })

    // 价格计算
    // let num=$("main .text .texts .num p>span");
    let price=$("main .text .texts .price p>span");
    let add=$("main .text .texts .choose_num>.add").eq(0);
    let cut=$("main .text .texts .choose_num>.cut").eq(0);
    let choose_num=$("main .text .texts .choose_num>span").eq(0);
    let nums=choose_num.text();
    // let sum=$("footer .footer_left>p>span>span");
    console.log(price,add, cut, choose_num);
    let k=0;
    add.click(function () {
        nums=0;
        k++;
        let g=nums+k;
        choose_num .text(`${g}`);
    })
    cut.click(function () {
        k--;
        let j=nums+k;
        choose_num .text(`${j}`);
        if (j<=1){
            choose_num .text(`${1}`);
        }
    })


    let add1=$("main .text .texts .choose_num>.add").eq(1);
    let cut1=$("main .text .texts .choose_num>.cut").eq(1);
    let choose_num1=$("main .text .texts .choose_num>span").eq(1);
    let k1=0;
    add1.click(function () {
        nums=0;
        k1++;
        let g1=nums+k1;
        choose_num1 .text(`${g1}`);
    })
    cut1.click(function () {
        k1--;
        let j1=nums+k1;
        choose_num1 .text(`${j1}`);
        if (j1<=1){
            choose_num1 .text(`${1}`);
        }
    })

    let add2=$("main .text .texts .choose_num>.add").eq(2);
    let cut2=$("main .text .texts .choose_num>.cut").eq(2);
    let choose_num2=$("main .text .texts .choose_num>span").eq(2);
    let k2=0;
    add2.click(function () {
        nums=0;
        k2++;
        let g2=nums+k2;
        choose_num2 .text(`${g2}`);
    })
    cut2.click(function () {
        k2--;
        let j2=nums+k2;
        choose_num2 .text(`${j2}`);
        if (j2<=1){
            choose_num2 .text(`${1}`);
        }
    })

    let add3=$("main .text .texts .choose_num>.add").eq(3);
    let cut3=$("main .text .texts .choose_num>.cut").eq(3);
    let choose_num3=$("main .text .texts .choose_num>span").eq(3);
    let k3=0;
    add3.click(function () {
        nums=0;
        k3++;
        let g3=nums+k3;
        choose_num3 .text(`${g3}`);
    })
    cut3.click(function () {
        k3--;
        let j3=nums+k3;
        choose_num3 .text(`${j3}`);
        if (j3<=1){
            choose_num3 .text(`${1}`);
        }
    })


})