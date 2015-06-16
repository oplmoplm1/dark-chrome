window.onload = function(){
	var h = new Date().getHours();
	if (h>=22 || h<=5){
    	[].map.call(document.querySelectorAll('*'),function(item){ item.style.backgroundColor='#222222';item.style.color='#00ff00 ';});
	}
}