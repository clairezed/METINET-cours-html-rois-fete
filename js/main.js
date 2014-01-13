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


    $('.item-btn').mouseenter(function () {
      var color = $(this).css('background-color');
      console.log(color);
      var type = $(this).children('a').attr('class');
      console.log(type);  

      $('.menu-drop-down').slideUp();
        $("#"+ type+"-menu")
          // .css({backgroundColor: color})
          .slideDown();
     }
    );

    $('.menu-drop-down').on('mouseleave', function(){
      $(this).slideUp();
    })

    $('.close-menu').on('click', function(){
      $('.menu-drop-down').slideUp();
    })

})
