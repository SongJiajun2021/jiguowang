$(function  (){
	$.ajax({
		url:'http://192.168.43.65:3000/play/category',
		type:'GET',
		dataType:'JSON',
		success: function(data){
				console.log(data);
				var i=0;
				var Sdf="";
				data.map(function(nItem){

						// var str=data.img;
						i++;
						// var iSrc=str.replace(/192.168.1.13/g,'192.168.43.65')
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
})