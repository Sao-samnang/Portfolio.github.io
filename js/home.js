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
    // Remove the transition class
    const square = document.querySelector('.square');
    square.classList.remove('square-transition');
    
    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square.classList.add('square-transition');
          return;
        }
    
        square.classList.remove('square-transition');
      });
    });
    
    observer.observe(document.querySelector('.square-wrapper'));
    squares.forEach((element) => observer.observe(element));
})