   $(document).ready(function() {

    $('.close-menu').on('click', function(){
      $('.menu-drop-down').slideUp();
    })

    // jquery for desktop
    if(window.matchMedia("(min-width:768px)").matches){

      // need to identify cursor presence on dropdown menu or navigation item menu
        var count=0; 
        $('.item-btn').mouseenter(function () {
          count=0
          count++;
          // $('.item-btn').css('color', '#333')
          // $(this).css('color', '#FFF')
          // var color = $(this).css('background-color');
          var type = $(this).children('a').attr('class');

          $('.menu-drop-down').slideUp();
            $("#"+ type+"-menu")
              // .css({backgroundColor: color})
            .slideDown();
        });

        $('.menu-drop-down').mouseenter(function () {
          count++;
        });
        
        $('.menu-drop-down, .item-nav').mouseleave(function(){
            count--;
            setTimeout(function(){
                if (count==0){
                        $('.menu-drop-down').slideUp();
                    }
            },50);
        });
    }


    // jquery for tablette
    if(window.matchMedia("(max-width:768px)").matches){

       $('.item-btn').on('click', function () {
          var type = $(this).children('a').attr('class');
          
          $('.menu-drop-down').not($("#"+ type+"-menu")).slideUp();
          $("#"+ type+"-menu").slideToggle();

        });
    }
    
    

})
