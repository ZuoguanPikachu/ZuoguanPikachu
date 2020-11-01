$(".menu-btn").click(function(){
    var drawer = new mdui.Drawer('#drawer')
    drawer.toggle()
})

$(".up-btn").click(function(){
    var offset = $(window).scrollTop()
    $("html,body").animate({scrollTop:0}, offset/10)
    return false
})

$("h4[href]").click(function(){
    window.location = $(this).attr("href")
})

$("div[href]").click(function(){
    window.location = $(this).attr("href")
})