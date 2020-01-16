//产生随机数
function randomInt(x=256) {
    return Math.floor(Math.random()*x);
}

//产生随机的颜色
function rgbColor() {
    var r=randomInt();
    var g=randomInt();
    var b=randomInt();
    return "rgb("+r+","+g+","+b+")";
}

//随机生成四位验证码
function f() {
    var arr1=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','e','s','t','u','v','w','y','z'];
    var num=[];
    for (var j=1;j<=4;j++){
        var number1 = Math.floor(Math.random()*arr1.length);
        num+=arr1[number1];
    }
    return num;
}

