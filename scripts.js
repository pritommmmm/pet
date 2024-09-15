document.addEventListener('DOMContentLoaded', () => {
    const reviewsSlider = document.querySelector('.reviews-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    reviewsSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        reviewsSlider.classList.add('active');
        startX = e.pageX - reviewsSlider.offsetLeft;
        scrollLeft = reviewsSlider.scrollLeft;
    });

    reviewsSlider.addEventListener('mouseleave', () => {
        isDown = false;
        reviewsSlider.classList.remove('active');
    });

    reviewsSlider.addEventListener('mouseup', () => {
        isDown = false;
        reviewsSlider.classList.remove('active');
    });

    reviewsSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - reviewsSlider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        reviewsSlider.scrollLeft = scrollLeft - walk;
    });
});
