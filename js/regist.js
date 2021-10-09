$(function () {

    //单项验证
    $inputs = $(".center>input:not(:last)")
    //新密码判定
    $inputs.eq(4).on("blur", function () {
        $inputs.eq(5).attr("pattern", "^" + $inputs.eq(4).val() + "$")
    })
    $inputs.eq(5).on("focus", function () {
        $(this).attr("pattern", "^" + $inputs.eq(4).val() + "$")
    })
    $.each($inputs, function (index, item) {
        this.num = index
    })
    $inputs.on("input", function () {
        this.checkValidity();
        this.validity.patternMismatch ? checkIpt(this.num) : this.setCustomValidity('');
    })

    function checkIpt(index) {
        switch (index) {
            case 0:
                $inputs[index].setCustomValidity($inputs.eq(index).val() === "" ? "手机号码不能为空" : "格式错误,请输入正确格式的手机号");
                break;
            case 1:
            case 2:
                $inputs[index].setCustomValidity("验证码错误 , 请重新输入验证码");
                break;
            case 3:
                $inputs[index].setCustomValidity($inputs.eq(index).val() === "" ? "用户名不能为空" : "格式错误,请输入4-10位非空格字符");
                break;
            case 4:
                $inputs[index].setCustomValidity($inputs.eq(index).val() === "" ? "密码不能为空" : "格式错误,密码长度为6~12个字符");
                break;
            case 5:
                $inputs[index].setCustomValidity($inputs.eq(index).val() === "" ? "确认密码不能为空" : "两次输入的密码不一致,请重新输入")
                break;
        }
    }
    //enter 换输入框
    $inputs.on("keydown", function (e) {

        if (e.keyCode === 13) {
            $inputs[this.num + 1] && $inputs[this.num + 1].focus && $inputs[this.num + 1].focus()
            return false;
        }
    })









    //验证与提交
    $("[type*=submit]").click(function (e) {
        let $form = $("form")
        $form.on("submit", function (e) {
            e.preventDefault()
            return false;
        })
        let flag=0
        $.each($inputs, function (index, item) {
            if (!item.validity.patternMismatch) {
               flag++
            }
        })
        // e.preventDefault()
        
        if(flag!=6){
            return;
        }
        $.ajax({
            url: 'http://192.168.1.33:3000/users/register',
            type: "POST",
            data: $form.serialize(),
            dataType: 'JSON',
            success: function (data) {
                var flag = /成功/.test(data.msg)
                if (flag) {
                    if (confirm("注册成功,是否立即跳转至极果主页?")) {
                        top.location = "./index.html"
                    }
                } else {
                    $("[type*=submit]").after('<div style="color:red">' + data.msg + ', 请重新输入!</div>')
                    $(document.documentElement).click(function (){
                        $("[type*=submit]+div").length ? $("[type*=submit]+div").remove() : '';
                    })

                }
            }
        })

    })






    //验证码倒计时
    document.getElementById('qwe').onclick = function fu() {
        var a = 60;
        var time = function dao() {
            a--;
            document.getElementById('qwe').innerText = a
            qwe.disabled = true;
            if (a == 0) {
                clearInterval(ting);
                qwe.disabled = false;
                document.getElementById('qwe').innerText = '重新获取验证码'
            }
        }
        var ting = setInterval(time, 1000);
    }

})