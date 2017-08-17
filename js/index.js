var url ='http://lingplus.hangtuosoft.com/index.php/app/index/index/op/';
var key ="idf5nsi5t0qbemwo12hztbftm53tbv6pht";
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