// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
	// 假设div 具有 databg 和datafont两个属性
	//得到背景颜色的配置
	var bg = this.getAttribute('databg');
	//得到字体颜色的配置
	var font = this.getAttribute('datafont');
	//调用executeScript方法来往页面注入代码，代码同a js
  chrome.tabs.executeScript(null,
      {code:"[].map.call(document.querySelectorAll('*'),function(item){ item.style.backgroundColor='"+bg+"';item.style.color='"+font+"';});"});
  //关闭窗口
  window.close();
}
// 当popup页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
  //得到加载完成后的所有div
  var divs = document.querySelectorAll('div');
  //对所有div加监听事件 触发click方法，假设div 具有 databg 和datafont两个属性
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
