   $(document).ready(function() {


      $('.close-menu').on('click', function(){
        $('.menu-drop-down').slideUp();
      })

       $('.item-btn').on('click', function () {
        if( $(window).width()> 480){ //click event only when desktop or tablette
          $('.item-btn').not($(this)).removeClass("active");
          $(this).toggleClass("active");
          var type = $(this).children('a').attr('class');
          
          $('.menu-drop-down').not($("#"+ type+"-menu")).slideUp();
          $("#"+ type+"-menu").slideToggle();
        }
      });

    // adapt behaviour following screen width
    $(window).resize(function() {
      var pageWidth = $(window).width(); 
      if( pageWidth> 480){
         $('.mobile-item-nav').css("display", "none");
      }
      if( pageWidth< 480){
          $('.menu-drop-down').css("display", "none");
      }
    });
    
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
