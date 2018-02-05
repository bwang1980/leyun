/* menu菜单 */
$(function () {
	
	var winw = parseInt($(window).width());	
	var nav1 = $('.nav1').offset().left;
	var nav2 = $('.nav2').offset().left;
	var nav3 = $('.nav3').offset().left;
	var nav4 = $('.nav4').offset().left;
	var nav5 = $('.nav5').offset().left;
	var nav6 = $('.nav6').offset().left;
	var nav7 = $('.nav7').offset().left;
	var nav8 = $('.nav8').offset().left;
	var nav9 = $('.nav9').offset().left;
	var nav10 = $('.nav10').offset().left;
	var nav11 = $('.nav11').offset().left;
	$('.navbox1').css({'margin-left':(nav1)});
	$('.navbox2').css({'margin-left':(nav2)});
	$('.navbox3').css({'margin-left':(nav3)});
	$('.navbox4').css({'margin-left':(nav4)});
	$('.navbox5').css({'margin-left':(nav5)});
	$('.navbox6').css({'margin-left':(nav6)});
	$('.navbox7').css({'margin-left':(nav7)});
	$('.navbox8').css({'margin-left':(nav8)});
	$('.navbox9').css({'margin-left':(nav9)});
	$('.navbox10').css({'margin-left':(nav10)});	
	$('.navbox11').css({'margin-left':(nav11-118)});	
	$('http://www.leaderbb.com/templets/default/js/.menu .nav .box').css({'left':(0)});
	$('.threePic').css({'padding-left':(winw-1095)/2});
	$('.ggBtns').css({'padding-left':(winw-40)/2});
	$('.footkfP').css({'padding-left':(winw-1190)/2});
	$('.bottom3P li').css({'width':(1190-24-6)/3});
	$('.top_banner img').css({'left':-(1920-winw)/2});
	$('.run').css({'left':(winw-785)/2});	
	$('.jzhj_more').css({'left':(winw/2)-140/2});	
	
	
	var navLi=$(".menu .nav li");
	navLi.mouseover(function () {
		$(this).find("a").addClass("current");
		$(this).find(".box").stop().slideDown(200);
	})
	navLi.mouseleave(function(){
		$(this).find("a").removeClass("current");
		$(this).find(".box").stop().slideUp(200);
	})
});
/* banner图 */
$(function () {
			
    var $con = $('#gg'), $box = $con.find('#ggBox'), $btns = $con.find('#ggBtns'), i = 0, autoChange = function () {
        i += 1;
        if (i === 5) { i = 0; }
        $btns.find('a:eq(' + i + ')').addClass('current').siblings().removeClass('current');
        var curr = $box.find('a:eq(' + i + ')'), prev = curr.siblings();
        prev.css('z-index', 3);
        curr.css('z-index', 4).animate({
            'opacity': 1
        }, 150, function () {
            prev.css({
                'z-index': 2, 'opacity': 0.1
            });
        });
    }, loop = setInterval(autoChange, 5000);
	
    $con.hover(function () {
        clearInterval(loop);
    }, function () {
        loop = setInterval(autoChange, 5000);
    });
	
    $btns.find('a').click(function () {
        i = $(this).index() - 1;
        autoChange();
    });
	
});
/* 最后一个无底边距 */

$(function(){    
    $(".newsBox li:first").css('margin-top','0');  
    $(".newsBox li:last").css('padding-bottom','0');  
    $(".newsBox li:last").css('border','none');  
    $(".zcQA li:last").css('border','none');  
    $(".bottom3P li:last").css('margin-right','0');  
    $(".footMenu ul li:first").css('padding-left','0');  
    $(".contactBtn li:last").css('margin-right','0');  
    $(".comboListBox li:first").css('margin-top','0');  
    $(".comboListBox li:last").css('border-bottom','none');  
    $(".fjzsSel li:last").css('margin-right','0');  

 
});
/* 首页问答 */
function selectli(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("controlSetli").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "QAsel";
	// 操作内容
	for(i=0; j=document.getElementById("TabContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
}
/* 联系我们 */
function contactClick(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("contactClick").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.className = "contactSel";
	// 操作内容
	for(i=0; j=document.getElementById("TabContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
}
/* 房间展示 */
function roomSetli(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("roomSetli").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "roomSel";
	// 操作内容
	for(i=0; j=document.getElementById("roomList"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
}
//left menu
$(function(){
$(".subNav").click(function(){
			$(this).toggleClass("leftD").siblings(".subNav").removeClass("leftD")
			
			// 修改数字控制速度， slideUp(500)控制卷起速度
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
	})	
})

/* li差异化 */
$(function(){
    $(".Q2:odd").addClass("QQ22");	
    $(".Q2:even").addClass("QQ21");
	$(".Q2T:odd").addClass("QQ2T2");
	$(".Q2T:even").addClass("QQ2T1"); 	
	$('.contrastList ul li:nth-child(1)').addClass("contrastList1");
	$('.contrastList ul li:nth-child(2)').addClass("contrastList2");
	$('.contrastList ul li:nth-child(3)').addClass("contrastList3");	
	
});

/* 右键 */
document.oncontextmenu=new Function('event.returnValue=false;');
document.onselectstart=new Function('event.returnValue=false;');

/* 验证 */
function yzly(){
         var name = document.getElementById("name");
         var tel = document.getElementById("tel");
         var mail = document.getElementById("e-mail");
         var message = document.getElementById("message");		 
		 
		 if(trim(name.value)==null || isChinese(trim(name.value))==false){
             alert("请输入正确的姓名！");
             name.focus();
             return false;
         } 
		 
		 if(trim(tel.value)==null || isTel(trim(tel.value))==false){
             alert("请输入正确的手机号码！");
             tel.focus();
             return false;
         }
		 
		 if(trim(mail.value)==null || isMail(trim(mail.value))==false){
             alert("请输入正确的邮箱！");
             mail.focus();
             return false;
         }
		 
		 if(trim(message.value)==null || trim(message.value)=="内容(Message)" || trim(message.value).length >= 50){
             alert("请输入不超过50个文字的内容！");
             message.focus();
             return false;
         }		 
    
         return true;
     }
	 
function yzpg(){
         var name = document.getElementById("name");
         var tel = document.getElementById("tel");
         var yuchanqi = document.getElementById("yuchanqi");
		 
		 if(trim(name.value)==null || isChinese(trim(name.value))==false){
             alert("请输入正确的称呼！");
             name.focus();
             return false;
         } 
		 
		 if(trim(tel.value)==null || isTel(trim(tel.value))==false){
             alert("请输入正确的手机号码！");
             tel.focus();
             return false;
         }
		 
		 if(trim(yuchanqi.value)==null || isDate(trim(yuchanqi.value))==false){
             alert("请输入您的预产期！");
             yuchanqi.focus();
             return false;
         }	 
    
         return true;
     }	 
	 
function yzwd(){
         var ask = document.getElementById("ask");	 
         var name = document.getElementById("name");	 
         var tel = document.getElementById("tel");	 
         var yuchanqi = document.getElementById("yuchanqi");	 
         var weixin = document.getElementById("weixin");	 
	     
		 if(trim(ask.value)==null || trim(ask.value)=="问题：(ask)" || trim(ask.value).length >= 50){
             alert("请输入不超过50个文字的问题！");
             ask.focus();
             return false;
         }
		 
		 if(trim(name.value)==null || isChinese(trim(name.value))==false){
             alert("请输入正确的姓名！");
             name.focus();
             return false;
         }
		 
		 if(trim(tel.value)==null || isTel(trim(tel.value))==false){
             alert("请输入正确的手机号码！");
             tel.focus();
             return false;
         }
		 
		 if(trim(yuchanqi.value)==null || isDate(trim(yuchanqi.value))==false){
             alert("请输入正确的日期格式！");
             yuchanqi.focus();
             return false;
         }
		 
		 if(trim(weixin.value).length >= 20 || isWechat(trim(weixin.value))==false){
			if(trim(weixin.value)!="微信：(Wechat.选填)"){
				alert("请输入正确的微信号码！");
				weixin.focus();
				return false;
			}
             
         }
		 
	     return true;
     }
function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
}
function isChinese(obj){ 
	var reg = /^[\u4E00-\u9FA5]{2,4}$/;
	if(!reg.test(obj)){ 
		return false; 
		} 
	}
function isTel(obj){	
	var reg = /^1[3|4|5|8][0-9]\d{8,8}$/; 
	if(!reg.test(obj)){ 
		return false; 
		} 
	} 
function isMail(obj){	
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(!reg.test(obj)){ 
		return false; 
		} 
	}
function isDate(obj){	
	var reg = /((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/;
	if(!reg.test(obj)){ 
		return false; 
		} 
	}
function isWechat(obj){	
	var reg = /^[0-9a-zA-Z]*$/g;
	if(!reg.test(obj)){ 
		return false; 
		} 
	}
	
/* 费用评估 */
$(document).ready(function(){
	$('#hb').click(function(){
		var _left = ($(window).width() - 960) / 2;
		$('#self-intro').animate({left: _left + 'px'});
		$('#self-intro').find('.close').fadeIn('fast');
		$('.tjpgB').css("display","block");
		$(this).hide();
	})
	
	$('#self-intro .close').click(function(){
		$('#self-intro').animate({left:'-920px'});
		$('.tjpgB').css("display","none");
		$(this).fadeOut('fast');
		$('#hb').show();
	})
})

//mobile
function mobile_device_detect(url)
 {
        var thisOS=navigator.platform;
        var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
 for(var i=0;i<os.length;i++)
        {
 if(thisOS.match(os[i]))
        {   
  window.location=url;
 }
  
 }
 if(navigator.platform.indexOf('iPad') != -1)
        {
  window.location=url;
 }
  var check = navigator.appVersion;
  if( check.match(/linux/i) )
          {
   if(check.match(/mobile/i) || check.match(/X11/i))
                 {
   window.location=url;
   }  
 }
 Array.prototype.in_array = function(e)
 {
  for(i=0;i<this.length;i++)
  {
   if(this[i] == e)
   return true;
  }
  return false;
 }
 } 
mobile_device_detect("http://m.leaderbb.com/");