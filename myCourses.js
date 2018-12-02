$(function () {
    $('#selectAll').click(function () {
        $('#courses :checkbox').prop('checked', $(this).prop('checked'));
    });
    $('.del').click(function () {
        $('#courses :checked').parents('.line').remove();
    });
    $(window).scroll(
        function () {
            if ($(this).scrollTop() > 60) {
                $('#nav').addClass('fixed');
            } else {
                $('#nav').removeClass('fixed');
            }
        }
    ).on('beforeunload', function () {
        return confirm();
    });
    
    $('.semester-divider').click(function () {
        $(this).nextUntil('.semester-divider').slideToggle('fast');             //slideToggle()以滑动效果隐藏集合中的元素，nextUntil() 获得每个元素所有跟随的同胞元素
        $(this).children('.arrow').toggleClass('arrowUp');                      //滑动展开
    });

});

