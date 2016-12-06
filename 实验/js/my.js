window.onload = function () {

    var oBtn=document.getElementById("LoginButt");
                //点击登录按钮
                oBtn.onclick=function(){
                    openNew();
                    roll();
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

        function roll(){
           // var menu=document.getElementByClassName("loginCon");  
           var rnd=Math.floor(Math.random()*79)+1;
           document.getElementsByClassName("loginCon")[0].style.background="url('img/"+rnd+".jpg') no-repeat";
                       }
 }