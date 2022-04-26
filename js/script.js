<script src="http://code.jquery.com/jquery-3.5.1.min.js">
$(document).ready(function(){
    function animation(){
      $(".roll, .line-up, .slide-left, .slide-up").each(function(){
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
});
</script>