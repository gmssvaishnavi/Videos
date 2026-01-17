document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('presentationVideo');
    const container = document.querySelector('.glass-container');

    // Add subtle tilt effect to container on mousemove
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const x = (clientX - innerWidth / 2) / innerWidth * 2; // -1 to 1
        const y = (clientY - innerHeight / 2) / innerHeight * 2; // -1 to 1

        container.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg) translateY(-5px)`;
    });

    // Reset tilt on mouseleave
    document.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });

    // Log video events for debugging
    video.addEventListener('play', () => console.log('Video started'));
    video.addEventListener('pause', () => console.log('Video paused'));
    video.addEventListener('error', (e) => console.error('Video error:', video.error));
});
