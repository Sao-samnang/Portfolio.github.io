$(document).ready(function(){
    $("body").css("height","100vh")
    setTimeout(()=>{
        $(".loading").remove();
        $(".contain-body").css("display","block")
        $("body").css("height","auto")
    },1000);
    $('.btn-home-top .bhire').click(function(){
        window.open("https://drive.google.com/file/d/1Pv2TDuAJEhHFMPecV8wqFVQmEKXswDax/view?usp=sharing")
    })
    
})