   $(document).ready(function() {

    if(window.matchMedia("(min-width:768px)").matches){
      $('.item-btn').mouseenter(function () {
      var color = $(this).css('background-color');
      var type = $(this).children('a').attr('class');

      $('.menu-drop-down').slideUp();
        $("#"+ type+"-menu")
          // .css({backgroundColor: color})
          .slideDown();
     }
    );

    $('.item-part').on('mouseleave', function(){
      $('.menu-drop-down').slideUp();
    })

    $('.close-menu').on('click', function(){
      $('.menu-drop-down').slideUp();
    })

    }

    

})
