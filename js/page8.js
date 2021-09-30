$(function(){
    $.ajax({
        url:'http://localhost:3000/useing/public',
        type:'GET',
        dataType:'JSON',
        success:function(hkl){
            console.log(hkl);
 
            $.each(hkl,function(i,f){
                
                var thk =f.img;
                var hti =f.text;
                var sht=thk.replace('192.168.1.13','localhost');
                var vbm= $('<li></li>')
                var ning=$('<img>').attr('src',sht)
                var bp= $('<p clsaa="as-ul-p"></p>').text(hti)
                var ho=$('<span class="as-ul-sp">2032</span>')
                var jt=$('<span class="as-ul-sp2">20<a>台</a></span>')
                var jti=$('<p class="as-ul-p2">1392<a>申请</a><p>')
                var kt=$('<p class="as-ul-p3">查看试用名单</p>')
                var luo=$('<span class="as-ul-sp3">首发<span>')
                vbm.append(ning)
                vbm.append(bp)
                vbm.append(ho)
                vbm.append(jt)
                vbm.append(jti)
                vbm.append(kt)
                vbm.append(luo)
                $('.ad-ul').append(vbm)
                
            })   
        }
    })
})
window.onload=function(){
    as_p.onclick=function(){
        as_p.style.display='none'
        as_p1.style.display='block'
    }
}