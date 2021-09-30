$(function () {
    var first = document.getElementsByTagName('input');
    var span = document.querySelectorAll('.dd')
    var sum = 60;
    var reg_mobile = /^1[3|4|5|7|8][0-9]{9}$/;
    var three = /^\d{4}$/;
    first[0].onblur = function () {
        if (reg_mobile.test(this.value)) {
            // console.log(1);
        }
        else if (this.value == this.value.length) {
            // console.log(2);
        }
        else {
            this.style.color = 'red'
            this.placeholder = '请正确输入电话号码'
        }
    }
    first[0].onfocus = function () {
        this.style.color = 'black'
    }
    first[2].onblur = function () {
        if (three.test(this.value)) {
            console.log(1);
        }
        else if (this.value == this.value.length) {
            // console.log(2);
        }
        else {
            this.value = '验证码错误'
        }
    }
    // span[1].onclick=function(){
    //      this .innerHTML=sum
    //      var cc=setInterval(seconds,1000)
    // }

    // function seconds()
    // {
    //     if (sum > 0) {
    //         sum--;
    //        span[1].innerHTML = sum;
    //          qwe.disabled = true;
    //     }
    //     else{
    //         clearInterval(cc)
    //     }
       
    // }
    document.getElementById('qwe').onclick = function fu() {
        var a = 60;
        var time = function dao() {
            a--;
            document.getElementById('qwe').innerText = a 
            qwe.disabled = true;
            if (a == 0) {
                clearInterval(ting);
                qwe.disabled = false;
                document.getElementById('qwe').innerText = '重新获取'
            }
        }
        var ting = setInterval(time, 1000);
    }
})