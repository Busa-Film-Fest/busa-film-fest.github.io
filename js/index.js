const scrollToElement = (elementId, offset) => {
  $("html, body").animate({
    scrollTop: $(`${elementId}`).offset().top + (offset || 0)
  }, 800);
};


$('#header').load('./template/header.html', () => {
  if (window.location.pathname === '/') {
    $('.nav-link').click(e => {
      if (e.currentTarget.hash) {
        e.preventDefault();
        scrollToElement(e.currentTarget.hash, -80);
      }
    });
  }
});

$('#footer').load('./template/footer.html');

// Set sticky navbar
$(window).scroll(function(e) {
  if ($(this).scrollTop() > 60) {
    $('#header > .navbar').addClass('compact');
  } else {
    $('#header > .navbar').removeClass('compact');
  }
});
