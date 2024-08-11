$(document).ready(function(){
    setTimeout(()=>{
        $(".loading").remove();
        $(".contain-body").css("display","block")
    },3000);
    
    $('.btn-home-top .bhire').click(function(){
        window.open("https://drive.google.com/file/d/1Pv2TDuAJEhHFMPecV8wqFVQmEKXswDax/view?usp=drive_link")
    })
})