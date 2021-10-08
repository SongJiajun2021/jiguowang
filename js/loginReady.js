$(function () {
	var src=$("head").children("link").attr("href")
	var flag=/\.\./.test(src)
	var str=flag?'..':'.'
	$(".loginbtn").click(function (e) {
		if (!$('iframe').length) {
			console.log("sogn");
			$(document.body).append('<iframe src="'+str+'/login.html" frameborder="1"></iframe>')
			console.log($("iframe"));
			$("iframe").css({
				position: "fixed",
				top: 0,
				left: 0,
				width: '100% ',
				height: '100%',
				'z-index': '50'
			})
		}else{
			$('iframe').css("display","block")
		}
		return false;
	})
})