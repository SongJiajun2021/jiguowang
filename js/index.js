$(function () {
    // 热门试用
    $.ajax({
        url: 'http://192.168.1.33:3000/play/hot',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data[i].map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://192.168.1.33')
                str += `<div class="hot_son2_S">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.description}</p>
                    <span>2032</span>
                    <span>20台</span>
                    <p><span>1392</span>申请</p>
                    <p>剩余时间2天</p>
                    <p class="p_p1">首发</p>        
                </div>`
            })
            $('.hot_son3').html(str)
        }
    })
    // 发现酷玩
    $.ajax({
        url: 'http://192.168.1.33:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data[i].map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://192.168.1.33')
                str += `<li class="find_son2_s2">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.text}</p>
                    <p>${nItem.price}</p>
                    <p>
                    <img src="./img/xin.png" alt="" width="10">${nItem.like}
                    <img src="./img/reply.png" alt="" width="10">${nItem.words}
                    </p>
                </li>`
            })
            $('.find_son2_s1').html(str)
        }
    })
    // 动画
    function k(l) {
        if (l < 10) {
            return '0' + l;
        } else {
            return '' + l;
        }
    }
    // 加载更多
    p.onclick = function () {
        p.style.display = 'none';
        p1.style.display = 'block';
    }
    console.log(p1);
    p1.onclick = function () {
        p1.style.display = 'none';
        p.style.display = 'block';
    }
    // 热门试用
    var span6 = document.getElementById('alf');
    var span7 = document.getElementById('art');
    var span8 = document.querySelector('.hot_son3');
    var i = 0;
    var a = -2160;
    var timer = null
    var flag = true;

    span6.onclick = function () {
        // console.log(1);
        i -= 270;
        if (i < -1080) {
            i = 0;
        }
        span8.style.marginLeft = i + 'px';
    }
    span7.onclick = function () {
        // console.log(2);
        i += 270;
        if (i > 0) {
            i = -1080;
        }
        span8.style.marginLeft = i + 'px';
    }
    if (flag) {
        flag = false;
        timer = setInterval(function () {
            span7.onclick()
        }, 1000)
    }
})