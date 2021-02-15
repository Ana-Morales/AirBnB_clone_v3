$(document).ready(function () {
  const dicAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked === true) {
      dicAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete dicAmenities[$(this).data('id')];
    }
    const lst = Object.values(dicAmenities);
    $('div.amenities h4').text(lst.join(', '));
  });
  $.get('http://0.0.0.0:5001/api/v1/status', function (data, textStatus) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
