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
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (const place of data) {
        $('.places').append('<article><div class="title_box"><h2>' +
        place.name +
        '</h2><div class="price_by_night">$' +
        place.price_by_night +
        '</div></div><div class="information"><div class="max_guest">' +
        place.max_guest + ' Guest' + (place.max_guest ? 1 : 's') +
        '</div><div class="number_rooms">' +
        place.number_rooms + ' Bedroom' + (place.number_rooms ? 1 : 's') +
        '</div><div class="number_bathrooms">' +
        place.number_bathrooms + ' Bathroom' + (place.number_bathrooms ? 1 : 's') +
        '</div></div><div class="description">' +
        place.description +
        '</div></article>');
      }
    }
  });
});
