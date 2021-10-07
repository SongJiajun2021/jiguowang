// 动画
$(function () {
    function k(l) {
        if (l < 10) {
            return '0' + l;
        } else {
            return '' + l;
        }
    }
    //倒计时
    function fn() {
        var before = new Date(), //当前时间
            assign = new Date('11,11,2021,00:00:00'), //指定时间
            sum = assign - before, //时间差
            tian = Math.floor(sum / 1000 / 60 / 60 / 24), //天
            xiaoshi = Math.floor(sum / 1000 / 60 / 60 % 24), //时
            fen = Math.floor(sum / 1000 / 60 % 60); //分
            // miao = Math.floor(sum / 1000 % 60); //秒
        document.getElementById('daojishi').innerHTML = '申请时间剩余 : ' + k(tian) + '天' + k(xiaoshi) + '小时' + k(fen) + '分钟' ;//+ k(miao) + '秒'
    }
    setInterval(fn, 1000);


    //右侧随页面滚动效果
    var $right = $(".you")
    window.onscroll = function () {
        var rightTop = $(document.body).scrollTop() + $(document.documentElement).scrollTop() - 480;
        rightTop > 0 ? "" : rightTop = 0
        var topMax = $right.parent().height() - $right.height()
        $right.parent().css("position", "relative")
        $right.css({
            position: "absolute",
            width: 270,
            left: 648 + "px",
            top: rightTop < topMax ? +rightTop + "px" : topMax + "px"
        })
    }
})