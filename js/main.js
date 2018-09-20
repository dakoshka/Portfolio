var $grid = $('.grid').isotope({
  itemSelector: '.grid-item'
});

// change is-checked class on buttons
var $buttonGroup = $('.button-group');
$buttonGroup.on('click', 'button', function (event) {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  var $button = $(event.currentTarget);
  $button.addClass('is-checked');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});

$('button[data-filter=".flyers"]').click();

$('[data-fancybox="images"]').fancybox({
  buttons: [
    'share',
    'thumbs',
    'close'
  ]
});





$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top - 125
    }, 1000, 'swing');

    var $button = $('nav button');
    if ($button.is(":visible")) {
      $button.click();
    }

  });
});




// // Add active class to the current button (highlight it)
// var header = document.getElementById("navbarNav");
// var btns = header.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("nav-active");
//     current[0].className = current[0].className.replace(" nav-active", "");
//     this.className += " nav-active";
//   });
// }



// Cache selectors
var lastId,
  topMenu = $("#navbarNav"),
  topMenuHeight = topMenu.outerHeight() + 125,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });
// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems.removeClass("nav-active");
    menuItems.filter("[href='#" + id + "']").addClass("nav-active");
  }
});