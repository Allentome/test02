$(function(){
    $('#nav li').hover(function(){                   //复合事件处理函数，对鼠标的进入切换显示显示状态，对鼠标的离开切换显示隐藏状态   
                                                    //hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数，方法触发 mouseenter(进入)和 mouseleave(离开)事件
        $(this).children('.dropdown').toggle();     //children()向下遍历，toggle()切换元素可见状态
    });
 
    $('.dropdown-a').hover(function(){
        $(this).toggleClass('menuFocused');         //toggleClass()添加或者删除
    });
});