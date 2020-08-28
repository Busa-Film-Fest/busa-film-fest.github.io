document.querySelectorAll('.presentation-col').forEach(col => {
  const img = col.querySelector('.presentation-image');
  const video = col.querySelector('.presentation-video');

  img.addEventListener('click', e => {
    $(img).fadeOut(600, () => {
      $(video).fadeIn(500, () => {
        video.play();
        const backToImg = () => {
          $(video).fadeOut(400, () => $(img).fadeIn());
          video.pause();
          video.currentTime = 0;
        };
        video.addEventListener('click', backToImg);
        video.addEventListener('ended', backToImg);
      });
    });
  });
});
