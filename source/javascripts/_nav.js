$(function(){
  function add(){
    $(this).addClass('active');
  }
  function remove(){
    $(this).removeClass('active');
  }
  function scrolly(button, div){
    $(button).click(function() {
      $('html, body').animate({
          scrollTop: $(div).offset().top
      }, 2000);
    });
  }
  scrolly('#aboutbtn', '#about');
  scrolly('#homebtn', '#home');
  scrolly('#hours', '#location');
  $('.navbar-nav li').mouseenter(add).mouseleave(remove);
});


