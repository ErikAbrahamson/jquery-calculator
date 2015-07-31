$(document).ready(function() {
  $('span').on('click', function(event) {
    event.preventDefault();
    if ($(this).is('#cancel')) {
      $('#screen').text(null);
    } else if ($(this).is('#calc')) {
        $('#screen').text(eval($('#screen').text()));
      } else {
        $('#screen').append($(this).text().replace('x','*').replace('\u00f7','/'));
      }
   });
});
