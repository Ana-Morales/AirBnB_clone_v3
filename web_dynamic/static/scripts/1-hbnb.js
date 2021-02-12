$(document).ready(function () {
    const dicAmenities = {};
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            dicAmenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete dicAmenities[$(this).data('id')];
        }
        const lst = Object.values(dicAmenities);
        if (lst.length > 0) {
            $('div.amenities > h4').text(lst.join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });
});