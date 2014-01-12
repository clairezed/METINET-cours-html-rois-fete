   $(document).ready(function() {

      // $(".menu-drop-down").each(function() {
      //   console.log( $(this).height())
      //   $.data(this, "realHeight", $(this).height());
      // }).css({ display:"none"  });
      

      // $( ".item-btn").on("mouseenter", function(){
      //      var div = $(".menu-drop-down");
      //       console.log( div.data("realHeight"))
      //     // div.toggle(function() {
      //       div.animate({ height: div.data("realHeight") }, 600);
      // //     }, function() {
      // //       div.animate({ height: 0 }, 600);
      // //     }); 
      // });


    $('.item-btn').hover(function () {
      var color = $(this).css('background-color');
      console.log(color);
      var type = $(this).children('a').attr('class');
      console.log(type);  


        $("#"+ type+"-menu")
          .css({backgroundColor: color})
          .slideToggle();
     }
    );


})
