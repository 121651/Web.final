var $grid = $('.collection-list').isotope({
  // options
});

$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');

function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}

var buyNowButton = document.getElementById('buyNowButton');

function playBuyNowSound() {
  var audio = new Audio('sound/cashregister.mp3');
  audio.play();
}

buyNowButton.addEventListener('click', function () {
  playBuyNowSound();
});
