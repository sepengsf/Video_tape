document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const trailerContainer = document.querySelector('.trailer-container');
    const video =document.querySelector('video');
    const closeIcon = document.querySelector('.fa-xmark');

    btn.addEventListener('click', function() {
        trailerContainer.classList.add('show'); 
    });

    closeIcon.addEventListener('click', function() {
        trailerContainer.classList.remove('show'); 
        video.pause();
        video.currentTime = 0;
    });
});
