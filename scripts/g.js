$(document).ready(function(){
    $(".p15-p2 li").click(function(){
        var di = $(this).attr('di');
        $(".p15-p3 .code-pre").removeClass('show');
        $(".p15-p3 .code-pre[di=" + di + "]").addClass('show');
        $(".p15-p2 li").removeClass('active');
        $(this).addClass('active');
    });
    $(".p15-p2 li").hover(function(){
        $(this).addClass('hover');
    }, function(){
        $(this).removeClass('hover');
    });
});