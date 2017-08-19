var ul = document.querySelector('.lbt-ul');
window.onload = window.onresize = function() {
    // 当浏览器发生改变的时候，通过定位的形式将图片定位到中心的位置
    // 图片的宽度
    var width = 1920;
    // 浏览器的宽度
    var cWidth = document.documentElement.clientWidth;
    // 计算ul需要定位的位置
    var left = (cWidth - width) / 2;
    // 直接赋值给ul
    ul.style.left = left + 'px';
}