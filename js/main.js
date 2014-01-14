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
    
    $('.menu-btn').on('click', function(){
        $(this).toggleClass("active");
        $('.mobile-item-nav').slideToggle();
      });


    $('.feat-menu-item').click(function(e) {
      e.preventDefault();
      $('.feat-menu-item').removeClass('feat-selected');
      $(this).addClass('feat-selected');

      var id = this.id.substring(5);
      var img = "#img-" + id;

      $('.slider').children('li').addClass('not-displayed');
      $(img).removeClass('not-displayed');
    });
    

})
