$(function  (){
	$.ajax({
		url:'http://192.168.1.33:3000/play/category',
		type:'GET',
		dataType:'JSON',
		success: function(data){
				console.log(data);
				var i=0;
				var Sdf="";
				data.map(function(nItem){
						i++;
						Sdf+=`<div class="z_one">
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