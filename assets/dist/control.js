$(document).ready(function() {
  $('li.nav-item').eq(0).addClass('active');
});

$('li.nav-item').click(function() {
  $('li.nav-item').removeClass('active');	
  $(this).addClass('active');
});

//change active class of navbar

var sections = $('section')
, nav = $('nav')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
    bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
  , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height + 100
  }, 500);
  
  return false;
});

// onscroll hide navbar

var zero = 0;
$(document).ready(function() {
  $(window).on('scroll', function() {
    $('nav').toggleClass('hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      
      // Store hash
      var hash = this.hash;
      
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//circular progress

$(function() {
  
  $("#prof-skills .progress").each(function() {
    
    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');
    
    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }
    
  })
  
  function percentageToDegrees(percentage) {
    
    return percentage / 100 * 360
    
  }
  
});

// displaying 4 recent projects
$(document).ready(function () {

  $('#showLess button').hide();
  
  size_li = $("#portfolio div.row").length;
  x=4;

  $('#portfolio div.row').hide();
  $('#portfolio div.row:lt('+x+')').show();

  $('#loadMore button').click(function () {
    x = x+5;
    $('#portfolio div.row:lt('+x+')').show();

    $('#loadMore button').hide();
    $('#showLess button').show();
  });

  $('#showLess button').click(function () {
    x = x-5;
    
    $('#showLess button').hide();
    $('#loadMore button').show();
    $('#portfolio div.row').not(':lt('+x+')').hide();
  });
});