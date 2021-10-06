$(function(){
    $.ajax({
        url:'http://192.168.0.104:3000/report/hot',
        type:'GET',
        dataType:'JSON',
        success: function(data){
            console.log(data);
            var i=0;
            var Sdf="";
            data.map(function(nItem){
                var str=data[i].img;
                i++;
                var iSrc=str.replace(/192.168.1.13/g,'192.168.0.104')
                Sdf+=`<div class="z_one">
                    <img src="${iSrc}" alt="">
                    <section>
                        <p>${nItem.text}</p>
                        <p class="z_two"><span>${nItem.uName}</span>${nItem.endTime}</p>
                        <p class="z_there"><img src="../img/zan.png">3<img src="../img/reply.png">3
                    </section>
                </div>`
            })
            $('.zu').html(Sdf)
          
           
        }
    })

 //右侧随页面滚动效果
 var $right=$(".you")
 window.onscroll=function (){
     var rightTop=$(document.body).scrollTop()+$(document.documentElement).scrollTop()-80;
     rightTop>0?"":rightTop=0
     var topMax=$right.parent().height()- $right.height()
     $right.parent().css("position","relative")
     $right.css({
         position:"absolute",
         width:270,
         right:0+"px",
         top:rightTop<topMax? +rightTop+"px" : topMax+"px"
     })
 }
})










