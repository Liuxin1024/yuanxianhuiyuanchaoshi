window.onload = function () {
  new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
  })


}
/*
//得到时间并写入div
function getDate(){
  //获取当前时间
  var date = new Date();
  //格式化为本地时间格式
  var date1 = date.toLocaleString();
  //获取div
  var div1 = document.getElementById("date");
  //将时间写入div
  div1.innerHTML = date1;
}
//使用定时器每秒向div写入当前时间
setInterval("getDate()",1000);*/
