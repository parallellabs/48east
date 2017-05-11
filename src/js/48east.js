// Common script
$(document).ready(function(){
  // sticky header
  $('#es-sticky-header-main').scrollToFixed({
    maxWidth:768,
    zIndex:11
  });
  $('#es-sticky-header').scrollToFixed({
    marginTop: 100,
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

  // Location input visible
  $('.location-input .location-selected').on('click', function(){
    $(this).hide();
    $(this).siblings('input').focus();
    // $('.body-overlay').show();
    // $('#es-sticky-header-main').css({'z-index': '5'});
    // $('body').css({'overflow': 'hidden'});
  });
  // On press enter on input
  $('.location-input input').keypress(function(e)
  {
    if (e.keyCode == '13') {
      $(this).siblings('.location-selected').find('span').text($(this).val());
      $(this).siblings('.location-selected').show();
      // $('.body-overlay').hide();
      // $('#es-sticky-header-main').css({'z-index': '11'});
      // $('body').css({'overflow': ''});
      $(this).blur();
    }
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

  // FLoting input valid state
  $('input').each(function(){
    if($(this).val()){
      $(this).addClass('valid');
    }else{
      $(this).removeClass('valid');
    }
  });
})
