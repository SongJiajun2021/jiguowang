 // 动画
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
        fen = Math.floor(sum / 1000 / 60 % 60), //分
        miao = Math.floor(sum / 1000 % 60); //秒
    document.getElementById('daojishi').innerHTML = '申请时间剩余' + k(tian) + '天' + k(xiaoshi) + '时' + k(fen) + '分' + k(miao) + '秒';
}
setInterval(fn,);