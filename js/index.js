const scrollToElement = (elementId, offset) => {
  $("html, body").animate({
    scrollTop: $(`${elementId}`).offset().top + (offset || 0)
  }, 800);
};


$('#header').load('./template/header.html', () => {
  $('.nav-link').click(e => {
    e.preventDefault();
    const targetSection = e.currentTarget.hash;
    scrollToElement(e.currentTarget.hash, -80);
  });
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
