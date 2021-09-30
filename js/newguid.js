
$(function () {
    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data[i].map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                str += `<li class="find_son1_s2">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.text}</p>
                    <p>${nItem.price}</p>
                    <p>
                    <img src="../img/xin.png" alt="" width="10">${nItem.like}
                    <img src="../img/reply.png" alt="" width="10">${nItem.words}
                    </p>
                </li>`
            })
            $('.find_son1_s1').html(str)
        }
    })
})

window.onload = function () {
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
}