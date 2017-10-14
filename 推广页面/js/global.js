/**
 * Created by Admin on 2016/6/10.
 */
var gofrom;
var url = location.href;
gofrom = url.slice(0,url.lastIndexOf('/'))+'/';
var isShow=false;
var clicknum=0;
var isIE6 = (!window.XMLHttpRequest && window.ActiveXObject) ? true: false;
$(function(){
   setTimeout('aa()',30*1000)
})

function aa(){
	if(!isShow && clicknum<10){
		var iLeft = ((document.documentElement.clientWidth || document.body.clientWidth)-290)/2;
		var iHeight = ((document.documentElement.clientHeight || document.body.clientHeight)-115)/2;
		var iTop = (document.documentElement.scrollTop || document.body.scrollTop);
		if (isIE6) {
			$('#floatkefu').css({top:(iHeight+iTop)}).show().animate({right:iLeft},10000);

		}else{
			$('#floatkefu').css({top:iHeight}).show().animate({right:iLeft},10000);

		}
		isShow=true;
	}
}

function uHide(str){
	$('#'+str).css({right:0}).hide();
	isShow=false;
	setTimeout('aa()',40*1000);
}
function Look(obj){
	$('#floatkefu').hide();
	if(issougou()){
		window.open('http://chat7.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=232154&configID=51076&jid=2764739030','澳洲达尔文生物科技美容集团-对话窗口', 'toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=570,height=424');
	}else{
		openChat(obj);
	}
}

function issougou(){
	var issougou =(function(a){
		if(a) a=a.toLowerCase();
		var index = a.indexOf("se 2.x");
		if(index!=-1){
			return true;
		}else return false;
	})(navigator.userAgent);
	return issougou;
}

//浮动客服
function floatkefu(){
	document.writeln("<div id=\"floatkefu\">");
	document.writeln("	<div style=\"position:relative;left:0;top:0;\">");
	document.writeln("        <a href=\"javascript:uHide(\'floatkefu\');\" class=\"closebtn\" title=\"关闭\">&nbsp;</a>");
	document.writeln("	<a href=\"javascript:freePhone();\" style=\"left:43px;\"><img src=\"http://www.mmvcc.com/g/images/m-freephone.png\" /></a>");
	document.writeln("	<a href=\"javascript:;\" onclick=\"Look(this);\" lim_company=\"232154\" style=\"left:128px;\"><img src=\"http://www.mmvcc.com/g/images/xz.png\" /></a>");
	document.writeln("	</div>");
	document.writeln(" </div>");
}

function testMessageBox(num){
	var str_message = '';
	str_message += '<form onsubmit="return check_message(this)" action="http://www.mmvcc.com/e/enews/index.php" method="post" id="form_message" name="form_message" enctype="multipart/form-data">';
	str_message += '<input type="hidden" value="AddGbook" id="enews" name="enews"><input type="hidden" name="formurl" value="'+url+'" />';
	str_message +='<input name="bid" type="hidden" value="'+num+'" />';
	str_message += '<div id="table_message"><div class="Tinfo"><p>您的姓名</p> <input type="text" class="Tinput" name="name" /> ';
	str_message += '<!--评价：满意 <input type="radio" name="pinjia" value="满意"/> 一般 <input type="radio" name="pinjia" value="一般"/> 不满意 <input type="radio" name="pinjia" value="不满意"/--></div>';
	str_message += '<div class="Tcon"><p>留言内容</p> <textarea name="lytext" class="Ttextarea"></textarea> </div>';
	str_message += '<div class="Tbom"><input type="image" src="http://www.mmvau.com/collagen/images/btn_submit.jpg" onmouseover="this.src=\'http://www.mmvau.com/collagen/images/btn_submit2.jpg\'" onmouseout="this.src=\'http://www.mmvau.com/collagen/images/btn_submit.jpg\'" />&nbsp;&nbsp;<img src="http://www.mmvau.com/collagen/images/btn_reset.jpg" style="cursor:pointer;" onclick="closeWindow();"  onmouseover="this.src=\'http://www.mmvau.com/collagen/images/btn_reset2.jpg\'" onmouseout="this.src=\'http://www.mmvau.com/collagen/images/btn_reset.jpg\'"/></div>';
	showMessageBox(str_message,320,300);
}

//滚动到指定位置
function uScroll(sObj,num){
   $(window).scrollTop($('#'+sObj).offset().top-num);
}

function CheckFrom(obj){
    if(obj.consignee.value==''){alert('请输入收货人姓名');obj.consignee.focus();return false}
    if(obj.itemId.value==''){alert('请选择您要购买的产品');obj.itemId.focus();return false}
    if(obj.quantity.value==''){alert('请输入您要购买的产品数量');obj.quantity.focus();return false}
    if(obj.mobile.value==''&&obj.tel.value==''){alert('手机号或者家庭电话至少填写一个');return false}
    var reg=/^\d{11}$/;
    if(!reg.test($.trim(obj.mobile.value))){alert("您的手机号码有误，请输入11位手机号");return false}
    if(obj.province.value==''){alert('请选择省份');obj.province.focus();return false}
    if(obj.city.value==''){alert('请选择城市');obj.city.focus();return false}
    if(obj.address.value==''){alert('请输入详细的送货街道地址');obj.address.focus();return false}
    $('#gofrom').val(gofrom);
    return confirm('您确认订单内容无误！');
}

//订购数量
function ReplaceNum()
{
	document.getElementById('quantity').value = document.getElementById('quantity').value.replace(/[^\d]/g,'');
	if($('#quantity').val()==''){$('#quantity').val(1);}
	ChangePrice();
}

function ChangePrice()
{
	var istr = $('#itemId').val();
	if(!istr) return '';
	var iArr = istr.split('|');


	var quantity = $('#quantity').val();
	if(quantity=='' || quantity<0){
		$('#quantity').val(1);
		quantity = 1;
	}
	var total = iArr[1]*quantity;
	$('#Total').html('<b>总计：</b> <span>'+total+'</span> 元');

}

function BuyShop(price,keyNum)
{
	$('#itemId').get(0).selectedIndex = keyNum;
	ChangePrice();
	uScroll('order',60);
	//$(window).scrollTop($('#order').offset().top-150);
}

//免费电话
function freePhone(){
    var hostname = location.hostname
    var str_message = '<form onsubmit="return check_message(this)" action="http://www.mmvcc.com/e/shu/doaction.php" method="post" id="form_message" name="form_message" enctype="multipart/form-data" style="width:380px;">';
    str_message += '<input name="enews" type="hidden" id="enews" value="freephone" /><input type="hidden" name="formurl" value="'+url+'" />';
    str_message += '<input name="hostname" value="'+hostname+'" type="hidden"/>';
    str_message += '<div class="WinFrom"><table width="100%"><tr><th>&nbsp;</th><td style="line-height:18px;text-align:left;">请输入您的联系电话，mmV美容顾问会在30分钟内<br/>给您来电回复，谢谢！</td></tr><tr><th>手机号</th><td><input type="text" name="phone" id="phone" class="itext"></td></tr><tr><th></th><td><input type="submit" value="提交" class="subinput"></td></tr></table></div>';
    str_message += '</form>';
    showMessageBox(str_message,380,300);
}

//让背景渐渐变暗
function showBackground(obj,endInt){
	if(isIe){
		obj.filters.alpha.opacity = endInt;
		obj.filters.alpha.opacity+=1;
		if(obj.filters.alpha.opacity<endInt)
		{
		setTimeout(function(){showBackground(obj,endInt)},5);
		}
	}else{
		var al=parseFloat(obj.style.opacity);al+=0.01;
		al = (endInt/100)
		obj.style.opacity=al;
		if(al<(endInt/100)){
			setTimeout(function(){showBackground(obj,endInt)},5);
		}
	}
}

var isIe=(document.all)?true:false;
//设置select的可见状态
function setSelectState(state){
	var objl=document.getElementsByTagName('select');
	for(var i=0;i<objl.length;i++){
		objl[i].style.visibility=state;
	}
}

//弹出方法 内容,X,宽度,高度
function showMessageBox(content,wWidth,wHeight){
	closeWindow();
	var bWidth=parseInt(document.documentElement.scrollWidth);//屏幕宽度
	var leftNum = (bWidth-wWidth)/2;
	var bHeight=parseInt(document.documentElement.scrollHeight);//屏幕高度
	var yScroll;//取滚动条高度
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {
		yScroll = document.body.scrollTop;
	}
	var topNum = yScroll+wHeight;
	if(isIe){
		setSelectState('hidden');
	}
	var back=document.createElement("div");//创建新层
		 back.id="back"; //新层属性
	var styleStr="top:0px;left:0px;position:absolute;background:#666;width:"+bWidth+"px;height:"+bHeight+"px;";//样式
		styleStr+=(isIe)?"filter:alpha(opacity=0);":"opacity:0;";
		back.style.cssText=styleStr;
	document.body.appendChild(back);
	showBackground(back,50);

	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";
	mesW.innerHTML="<div class='close'><a href='javascript:;' onclick='closeWindow();' title='关闭窗口'><img src='http://www.mmvau.com/collagen/images/close.gif'></a></div><div class=''>"+content+"</div>";
	styleStr="left:"+leftNum+"px;top:"+(topNum)+"px;position:absolute;width:"+wWidth+"px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}

//关闭窗口
function closeWindow(){
	if(document.getElementById('img_good')!=null)document.getElementById('img_good').style.display='';
	if(document.getElementById('back')!=null)
	{
	document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
	}
	if(document.getElementById('mesWindow')!=null)
	{
	document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	}
	if(isIe){
	setSelectState('');}
}

function AjaxGetAnLi(page,classid){
    if(page=='' || page<0) page=0;
    if(!classid){
        alert('缺少classid参数');return false;
    }
    $.ajax({
             type:'get',
             url:'http://www.mmvau.com/e/shu/Doajax.php',
             dataType:"jsonp",
             data:'enews=testajax&classid='+classid+'&page='+page+'&temp=wap&line=3',
             jsonp:"jsonpcallback",
             success:function(data){
                $.each(data,function(i,v){
                    $('#member_con').html(v);
                });
            }
    });
}

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return 1;
    } else {
        return 0;
    }
}