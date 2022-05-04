$(document).ready(function(){
    function animation(){
      $(".roll, .line-up, .slide-left").each(function(){
          var winh=$(window).height();
          var scrt = $(document).scrollTop();
          set = $(this).offset().top
          if(scrt >= set - winh * 0.7){
            $(this).addClass("active")
          }else{
            $(this).removeClass("active")
          }//if else
      })//each
    };

    animation();
    $(window).scroll(function(){
        animation();
    });

    var jbTime = 600;

    function animation2(){
      $(".slide-up").each(function(index, item){
        let a=$(this)
          var winh=$(window).height();
          var scrt = $(document).scrollTop();
            set = $(this).offset().top
            if(scrt >= set - winh * 0.7){
              setTimeout(function(){
                a.addClass("active")
                console.log(index*100)
              }, index * 100);    
            }else{
              setTimeout(function(){
                a.removeClass("active")
              }, index * 10);    
          }//if else
    });
    };
    
    animation2();
    $(window).scroll(function(){
      animation2();
  });
});