$(function () {
    function djs(spans){
        setInterval(setDate,1000);
        function setDate(){
            let arr=fn();
            spans.each(function (i) {
                $(this).html(arr[i]);
            })
        }
        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018,9,1,18,0,0);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);

            //月
            // let month = Math.floor(time / (30 * 24 * 60 * 60));
            // arr.push(month);
            let day = Math.floor(time % (30 * 24 * 60 * 60) / (24 * 60 * 60));
            arr.push(day);
            let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
            arr.push(hour);
            let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
            arr.push(m);
            // let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
            // arr.push(s);

            return arr;
        }
    }
    let spans=$("main .djs .contai .titler span");
    djs(spans);
})
