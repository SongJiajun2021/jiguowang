$(function () {
	var $mainRight = $(".l-div")
	$mainRight.delegate("div", "click", function () {
		if (!/activ/.test(this.className)) {
			$(this).addClass("activ")
			$(this).html($(this).html().replace(/(\d\d)/,16))
		} else {
			$(this).removeClass("activ")
			$(this).html($(this).html().replace(/(\d\d)/,15))
		}

	})
	$(".fx-div").click(function (){
			$(".sharedetail").toggle();
		})
	// $(".fx-div").hover(function (){
	// 	$(".sharedetail").show();
	// },function (){
	// 	$("sharedetail").on("mousemove mouseover",function (){
	// 		return;
	// 	})
	// 	$(".sharedetail").hide();
	// })
  //右侧随页面滚动效果
	var $right=$mainRight
	window.onscroll=function (){
			var rightTop=$(document.body).scrollTop()+$(document.documentElement).scrollTop()-60;
			rightTop>0?"":rightTop=0
			var topMax=$right.parent().height()- $right.height()
			$right.parent().css("position","relative")
			$right.css({
					position:"absolute",
					right:+"px",
					top:rightTop<topMax? +rightTop+"px" : topMax+"px"
			})
	}
})