function returns(){
	window.history.go(-1);
}
 var browser={
	versions:function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		return {         //移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
			iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
//		alert("语言版本: "+browser.language);
//		alert(" 是否为移动终端: "+browser.versions.mobile);
//		alert(" ios终端: "+browser.versions.ios);
//		alert(" android终端: "+browser.versions.android);
//		alert(" 是否为iPhone: "+browser.versions.iPhone);
//		alert(" 是否iPad: "+browser.versions.iPad);
//		alert(navigator.userAgent);


 // 解析地址
function parseUrl(){
    var url=location.href;
    var i=url.indexOf('?');
    if(i==-1)return;
    var querystr=url.substr(i+1);
    var arr1=querystr.split('&');
    var arr2=new Object();
    for  (i in arr1){
        var ta=arr1[i].split('=');
        arr2[ta[0]]=ta[1];
    }
    return arr2;
}
// 签名
function doSign(values,data){
    values.sort();
    var str="";
    for(var i in values) {
	   	str+=values[i]+'='+data[values[i]] +'&';       
    }
   str = str.substr(0,str.length-1);
   var key ="idf5nsi5t0qbemwo12hztbftm53tbv6pht";
   var value="idf5nsi5t0qbemwo124213198as";
   var str1 = value+str+'&key='+key+value;
   var sign = (md5(str1)).toUpperCase();
   return sign;
}
var link_url="http://lingplus.hangtuosoft.com/index.php/app/index/index/op/";
var link_url1="http://iling.hangtuosoft.com";

//转换日期
function dateToStr(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js从0开始取 
	var date = datetime.getDate(); 
	var hour = datetime.getHours(); 
	var minutes = datetime.getMinutes(); 
	var second = datetime.getSeconds();					 
	if(month<10){month = "0" + month;}
	if(date<10){date = "0" + date;}
	if(hour <10){hour = "0" + hour;}
	if(minutes <10){ minutes = "0" + minutes;}
	if(second <10){second = "0" + second ;}					 
//	var time = year+"."+month+"."+date+" "+hour+":"+minutes+":"+second; 
	var time=+month+"-"+date+" "+hour+":"+minutes;
	return time;
}

//转换日期  2017-5-9 10:10
var formatDateTime = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '-' + m + '-' + d+' '+h+':'+minute;
};

//转换日期  2017.5.9
var formatDateTimes = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '.' + m + '.' + d;
};

function msg(str){
	 
	$('<div class="msg_bg">'+str+'</div>').appendTo("body");
	var w=$(".msg_bg").width()/2;
	var h=$(".msg_bg").height()/2;
	$(".msg_bg").css("margin-left",-w+"px");
	$(".msg_bg").css("margin-top",-h+"px");
	$(".msg_bg").delay(1500).fadeOut("slow");
}

function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
};
// 微信title
function wxSetTitle(title) {
    document.title = title;
    var mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.setAttribute('src', 'loading.png');
        var iframeCallback = function() {
            setTimeout(function() {
                iframe.removeEventListener('load', iframeCallback);
                document.body.removeChild(iframe);
            }, 0);
        };
        iframe.addEventListener('load', iframeCallback);
        document.body.appendChild(iframe);
    }
}

