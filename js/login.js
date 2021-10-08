$(function () {
	//设置覆盖可视区
	window.onresize = function () {
		bodySize()
	}
	bodySize()

	function bodySize() {
		$("section").css({
			width: window.innerWidth + "px",
			height: window.innerHeight + "px"
		})
	}
	//设置关闭键
	var close = document.querySelector(".close_icon")
	close.onclick = function () {
		parent.document.querySelector("iframe").style.display = "none"
	}
	$("body").click(function () {
		close.onclick()
	})
	$("main").click(function () {
		return false;
	})
	//验证与提交
	$("[type*=submit]").click(function (e) {
		let $form = $("form")
		console.log($form.serialize());
		$.ajax({
			url: 'http://192.168.1.33:3000/users/login',
			type: "POST",
			data: $form.serialize(),
			dataType: 'JSON',
			success: function (data) {
				console.log(data);
				var str = data.msg
				var flag = /成功/.test(str)
				if (flag) {
					window.top.document.querySelector("iframe").style.display = "none"
				} else {
					$("#err")?$("#err").remove():'';
					$("[type*=pass]").parent().after("<span id='err'>" + str + "</span>")
					$("#err").css({
						color: "red",
						"margin-left": "80px"
					})
					console.log($("#err").parent());

				}
			}
		})
		$form.on("submit", function (e) {
			e.preventDefault();
		})
	})
})