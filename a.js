window.onload = function(){
	//得到当前时间的小时
	var h = new Date().getHours();
	//判断小时是否是晚上
	if (h>=22 || h<=5){
    	// 对所有元素通过map进行遍历，对所有元素设定background和color两个属性。
    	[].map.call(document.querySelectorAll('*'),function(item){ item.style.backgroundColor='#222222';item.style.color='#00ff00 ';});
	}
}