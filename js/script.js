$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').slideUp();
    } else {
      $(this).addClass('active');
      $('nav').slideDown();
    }
  });

  $(function(){
    $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
    });
    });

    $(function(){
      $(window).scroll(function (){
          $('.fadein').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
  });
