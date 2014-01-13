   $(document).ready(function() {



    // jquery for desktop + tablette
    if(window.matchMedia("(min-width:480px)").matches){

      $('.close-menu').on('click', function(){
        $('.menu-drop-down').slideUp();
      })

       $('.item-btn').on('click', function () {
          var type = $(this).children('a').attr('class');
          
          $('.menu-drop-down').not($("#"+ type+"-menu")).slideUp();
          $("#"+ type+"-menu").slideToggle();

        });
    }
    
    

})
