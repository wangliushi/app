$(function() {
    var index = 0;
    $('.nave a').mouseover(function() {
        index = $(this).index(); // 2
        $('.order .geshou-two').eq(3 * index).show().siblings().hide();
    })
    $('.diandian a').mouseover(function() {
        // 下面的小索引
        var num = $(this).index(); // 1

        // 3*index：三个box为一组，3*index就是每组中第一个
        $('.order .geshou-two').eq(3 * index + num).show().siblings().hide();
    })
})