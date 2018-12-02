$(function () {
    $('button').click(function () {
        var htmlStr = '';
        $('#login-form input').each(function () {                            //遍历函数
            if ($.trim(this.value) == '') {                                 //this是指当前dom对象
                if (this.id == 'username') {
                    htmlStr = '<div class="tips">请填写账号</div>';

                } else {
                    htmlStr = '<div class="tips">请填写密码</div>';

                };
                $(this).parent().addClass('warning').next().replaceWith(htmlStr);                   //指定元素添加warning

            } else {
                $(this).parent().removeClass('warning').next().replaceWith('<div class="tips"></div>');         //remove删除warning类
            }
        }).keydown(function () {
            $(this).parent().removeClass('warning').next().replaceWith('<div class="tips"></div>');
        }); 

           return false;
    });

    $img=$('#bannerWrap img');
    $img.css('margin-top',($(window).height()-$img[0].height)/2);               //使图片在垂直方向上位于窗口的中央位置
    $('#bannerWrap').fadeIn(2000).delay(3000).animate({                         //fadeIn() banner历时2秒淡出，delay()动画延迟
        width:'0',                                                              //animate()执行自定义动画，宽渐变为0
        opacity:'0'                                                             //透明度渐变为0
    },'slow');

});
