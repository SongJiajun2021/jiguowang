$(function(){
    $.ajax({
        url:'http://localhost:3000/report/hot',
        type:'GET',
        dataType:'JSON',
        success: function(data){
            var i=0;
            var Sdf="";
            data.map(function(nItem){
                var str=data[i].img;
                i++;
                var iSrc=str.replace(/192.168.1.13/g,'localhost')
                Sdf+=`<div class="z_one">
                    <img src="${iSrc}" alt="">
                    <p>${nItem.text}</p>
                    <p class="z_two"><span>苏苏</span>2016-01-25</p>
                    <p class="z_there"><img src="../img/zan.png">3<img src="../img/reply.png">3
                </div>`
            })
            $('.zu').html(Sdf)
          
           
        }
    })
})










