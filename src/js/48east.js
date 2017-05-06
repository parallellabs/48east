// Common script
$(document).ready(function(){
  // Location input visible
  $('.location-input .location-selected').on('click', function(){
    $(this).hide();
    $(this).siblings('input').focus();
  });
  // On press enter on input
  $('.location-input input').keypress(function(e)
  {
    if (e.keyCode == '13') {
      $(this).siblings('.location-selected').find('span').text($(this).val());
      $(this).siblings('.location-selected').show();

      $(this).blur();
    }
  });
  // end

  $('.select-dropdown .dropdown-menu').on('click', 'a', function(e){
    event.preventDefault();
    // console.info($(e.target));
    var addCaret = '<span class="caret"></span>';
    var selectedItem = $(e.target).text();
    $(this).parents('.select-dropdown').find('.dropdown-toggle').html(selectedItem + addCaret);
  });
})
