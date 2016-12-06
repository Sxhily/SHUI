window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 5;
    var animated = false;
    var interval = 3000;
    var timer;
    var oBtn=document.getElementById("LoginButt");
                //点击登录按钮
                oBtn.onclick=function(){
                    openNew();
                    return false;
                    }
        function openNew(){
            //获取相应元素高，宽
           var sWidth=document.body.scrollWidth;
           var sHeight=document.body.scrollHeight;   
           var wHeight=document.documentElement.clientHeight;   
           var Mask=document.createElement("div");
               Mask.id="mask";
               Mask.style.height=sHeight+"px";
               Mask.style.width=sWidth+"px";
           document.body.appendChild(Mask);
           //将mask这个元素杀入源码当中
           var Login=document.createElement("div");
           //createElement是创建一个表签名
               Login.id="loginTag";
               Login.innerHTML="<div class='loginCon'><div id='close'></div></div>";
           document.body.appendChild(Login);
           var dHeight=Login.offsetHeight;
           var dWidth=Login.offsetWidth;
               Login.style.left=sWidth/2-dWidth/2+"px";
               Login.style.top=wHeight/2-dHeight/2+"px";
           var Close=document.getElementById("close");
               Close.onclick=Mask.onclick=function(){
                    document.body.removeChild(Login);
                    document.body.removeChild(Mask);
                    };
                };
                    