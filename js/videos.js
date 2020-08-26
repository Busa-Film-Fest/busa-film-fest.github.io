document.querySelectorAll('.presentation-col').forEach(col => {
  const img = col.querySelector('.presentation-image');
  const video = col.querySelector('.presentation-video');

  img.addEventListener('click', e => {
    const videoSrc = img.dataset.src;

    video.querySelectorAll('source').forEach(el => el.remove());
    const source = document.createElement('source')
    source.src = videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

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
