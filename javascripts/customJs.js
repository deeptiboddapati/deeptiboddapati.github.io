
<<<<<<< HEAD
=======
$(document).ready(function(){
   
>>>>>>> 54a76b6633807da54c86703005910be73bf0e704

/** ===========================================
    Hide / show the mobile navigation menu
============================================ */

$(document).ready(function(){




   console.log('Window Height is: ' + $(window).height());
   console.log('Document Height is: ' + $(document).height());

  var previousScroll = 0;

  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();
    /*
      If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
    */
    if (currentScroll > 200 && currentScroll < $(document).height() - $(window).height()){
      /*
        If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
      */
      if (currentScroll > previousScroll ){
        window.setTimeout(hideNav, 300);
      /*
        Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
      */
      } 
      else {
        window.setTimeout(showNav, 300);
      }
      /* 
        Set the previous scroll value equal to the current scroll.
      */
      previousScroll = currentScroll;
    }
    else{
      window.setTimeout(hideNav, 300);
    }

  });
  
  function hideNav() {
    $("[data-nav-status='toggle']").addClass("hidden");

  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("hidden");
  }

});
<<<<<<< HEAD

$('.readmore').click(function(){
    var $this = $(this);
    $this.toggleClass('readmore');
    if($this.hasClass('readmore')){
      $this.text('See More');     
    } else {
      $this.text('See Less');
    }
  });
=======
>>>>>>> 54a76b6633807da54c86703005910be73bf0e704
