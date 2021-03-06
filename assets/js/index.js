window.onload = window.onresize = function() {
    // 轮播图自动居中开始
    var ul = document.querySelector('.swiper-wrapper');
    // 当浏览器发生改变的时候，通过定位的形式将图片定位到中心的位置
    // 图片的宽度
    var width = 1920;
    // 浏览器的宽度
    var cWidth = document.documentElement.clientWidth;
    // 计算ul需要定位的位置
    var left = (cWidth - width) / 2;
    // 直接赋值给ul
    ul.style.left = left + 'px';

    // 轮播图自动居中结束
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // 左按钮
        prevButton: '.swiper-button-prev',
        // 右按钮
        nextButton: '.swiper-button-next',
        // slidesPerView: 1,
        // paginationClickable: true,
        // spaceBetween: 30,
        // 轮播循环
        loop: true,
        effect: 'fade',
        // centeredSlides: true,
        // 轮播定时器时间
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    var li = document.querySelectorAll('.hide-two span');
    var div = document.querySelectorAll('.shoufa-two');
    // 通过循环完成开发
    var len = li.length;
    for (var i = 0; i < len; i++) {
        li[i].onmouseover = function() {
            // 统一将所有的div隐藏,鼠标移入的时候,不管当前是谁显示着,直接全部隐藏(所有的div全部隐藏)
            for (var j = 0; j < len; j++) {
                div[j].className = 'hide';
            }
            // 获取鼠标移入到第几个li
            var index = this.getAttribute('data-index');
            // 让对应的div显示
            div[index].className = 'shoufa-two';
        }
    }
}