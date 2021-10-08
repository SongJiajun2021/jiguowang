
$(function () {
    $.ajax({
        url: 'http://192.168.1.33:3000/guid/new',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var i = 0;
            var str = "";
            data.map(function (nItem) {
                console.log(nItem.text);
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://192.168.1.33')
                str += `<li class="find_son1_s2">
                    <img src="${Isrc}" alt="" width="220">
                    <p>${nItem.text}</p>
             
                    <p>
                    <img src="../img/xin.png" alt="" width="10">${nItem.like}
                    <img src="../img/reply.png" alt="" width="10">${nItem.words}
                    </p><div><div></div></div>
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