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
});
