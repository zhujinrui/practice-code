function getTime(){
			var myDate=new Date();
			var date=myDate.toLocaleDateString();
			var hours=myDate.getHours();
			var minutes=myDate.getMinutes();
			var seconds=myDate.getSeconds();
			hours=checkTime(hours);
			minutes=checkTime(minutes);
			seconds=checkTime(seconds);
			document.getElementById('now').innerText=date+" "+hours+":"+minutes+":"+seconds;
			setInterval("getTime()",10);
		}
getTime();

document.getElementById('deadline').innerText="2018年6月1日   0:0:0";
 
//时间倒计时处理方法一
//function timer(time) 
//{
// var ts = (new Date(time)) - (new Date());//计算剩余的毫秒数
// var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
// var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
// var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
// var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
// dd = checkTime(dd);
// hh = checkTime(hh);
// mm = checkTime(mm);
// ss = checkTime(ss);
// document.getElementById("timetodead").innerText = dd + "天" + hh + "时" + mm + "分" + ss + "秒";
// setInterval("timer('2018/06/01 0:0:0')",1000);
//}
function checkTime(i)
{
if (i < 10) {
i = "0" + i;
   }
return i;
}
//timer('2018/06/01 0:0:0') ;

//倒计时处理方法2
function timer(time){
	var EndTime=new Date(time);
	var NowTime=new Date();
	var t=EndTime.getTime()-NowTime.getTime();
	var d=Math.floor(t/1000/60/60/24);
	var h=Math.floor(t/1000/60/60%24);
	var m=Math.floor(t/1000/60%60);
	var s=Math.floor(t/1000%60);
	h=checkTime(h);
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('timetodead').innerText=d+"天"+h+"时"+m+"分"+s+"秒";
	setInterval("timer('2018/06/01 0:0:0')",10);	
}
timer('2018/06/01 0:0:0');
