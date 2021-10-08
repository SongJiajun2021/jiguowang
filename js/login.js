$(function () {
	//设置覆盖可视区
	window.onresize = function () {
		bodySize()
	}
	bodySize()
	console.log(window.innerHeight);

	function bodySize() {
		$("section").css({
			width: window.innerWidth + "px",
			height: window.innerHeight + "px"
		})
	}


	//设置关闭键
	$(".active").on("click", function (e) {
		if (e.target.nodeName.toUpperCase() == "MAIN")
			console.log(e.target.nodeName)
	})
	//验证与提交
	$("[type*=submit]").click(function (e) {
		let $form = $("form")
		console.log($form.serialize());
		$.ajax({
				url: 'http://192.168.43.65:3000/users/login',
				type: "POST",
				data: $form.serialize(),
				dataType: 'JSON',
				success: function (data) {
						console.log(data)
				}
		})
		$form.on("submit", function (e) {
				e.preventDefault()
		})
})
})