// Common script
$(document).ready(function(){
  // sticky header
  $('#es-sticky-header-main').scrollToFixed({
    maxWidth:767,
    zIndex:11
  });

  $(window).resize(function(){
    if($(this).width() >= 768){
      $('#es-sticky-header').scrollToFixed({
        marginTop: 0,
        zIndex: 10,
        postFixed: function() {
          $('#cart-btn').css({'opacity':'1'}).removeClass('sticky');
          $('.filter').css('right', '20px');
        },
        preFixed: function() {
          $('#cart-btn').css({'opacity':'0'}).addClass('sticky');
          $('.filter').css('right', '140px');
        }
      });
    } else if($(this).width() <= 767) {
      $('#es-sticky-header').scrollToFixed({
        marginTop: 117,
      });
    }else {
      $('#es-sticky-header').remove('scrollToFixed');

    }
  })
  .resize();//trigger resize on page load

  // Unwanted elem clear
  // $('.scroll-to-fixed-fixed').next().remove();

  // Location input visible
  $('.location-input .location-selected').on('click touchstart', function(){
    $(this).hide();
    $(this).siblings('input').focus();
    $('.body-overlay').show();
    $('body').css({'overflow': 'hidden'});
  });

  // On press enter on input
  $('.location-input input').keypress(function(e)
  {
    var $this = $(this);
    $(this).siblings('.suggestions').slideDown();

    if (e.keyCode == '13') {
      $(this).siblings('.location-selected').find('span').text($(this).val());
      $(this).siblings('.location-selected').show();
      $('.body-overlay').hide();

      $(this).blur();
      $(this).siblings('.suggestions').slideUp();
      $('body').removeAttr('style');
    }

    $($this).siblings('.suggestions').find('li').on('click', function(){
      var content= $(this).text();
      $($this).val(content);
    });

  });
  // end

  // Select Dropdown
  $('.select-dropdown .dropdown-menu').on('click', 'a', function(e){
    event.preventDefault();
    // console.info($(e.target));
    var addCaret = '<span class="caret"></span>';
    var selectedItem = $(e.target).text();
    $(this).parents('.select-dropdown').find('.dropdown-toggle').html(selectedItem + addCaret);
  });

  // Slide panel
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close,.close-cart').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  // rating

  var logID = 'log';
  $('.rating').each(function(i){
    var log = $('<div class="log" id="log-'+i+'"></div>');
    $(this).append(log);
    $(this).find('[type*="radio"]').change(function () {
      var me = $(this);
      log.html(me.attr('value'));
    });
  });

  // end

  // FLoting input valid state
  $('input').each(function(){
    if($(this).val() || $.isNumeric(this)){
      $(this).addClass('valid');
    }else{
      $(this).removeClass('valid');
    }
  });
  $('input').on('change', function(){
    if($(this).val() || $.isNumeric(this)){
      $(this).addClass('valid');
    }else{
      $(this).removeClass('valid');
    }
  });
})
