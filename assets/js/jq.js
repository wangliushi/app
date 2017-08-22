var index = 0,
    len = $('.lbt-ul li').length,
    timer = 0;

function run() {
    timer = setInterval(function() {
        lun(function() {
            index = ++index > len - 1 ? 0 : index;
        })
    }, 2000);
}
run();
$('.lbt').mouseover(function() {
    clearInterval(timer);
}).mouseout(function() {
    run();
});
$('.ol a').mouseover(function() {
    var that = $(this);
    lun(function() {
        index = that.index();
    });
});

$('.left').click(function() {
    lun(function() {
        index = --index < 0 ? len - 1 : index;
    })
})
$('.right').click(function() {
    lun(function() {
        index = ++index > len - 1 ? 0 : index;
    })
})

function lun(cb) {
    $('.lbt-ul li').stop(true, true);
    $('.lbt-ul li').eq(index).fadeOut(300);
    $('.ol a').eq(index).removeClass('active');
    cb();
    $('.lbt-ul li').eq(index).fadeIn(300);
    $('.ol a').eq(index).addClass('active');
}




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