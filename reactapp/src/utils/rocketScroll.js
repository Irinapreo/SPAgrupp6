document.addEventListener("DOMContentLoaded", function() {
    var rocket = document.getElementById("rocket");
    var rocketHeight = rocket.offsetHeight;
    
    var startOffset = 15;
    var endOffset = 50;

    function handleScroll() {
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollY = window.scrollY;
        var scrollPercent = scrollY / scrollHeight;

        var newTop = scrollPercent * (window.innerHeight - rocketHeight - endOffset) + startOffset;
        rocket.style.top = newTop + "px";
    }

    window.addEventListener("scroll", handleScroll);

    rocket.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const totalFrames = 21;
        let currentFrame = 1;

        function animateRocket() {
            rocket.src = `/images/Rocket/Rocket${currentFrame}.png`;
            currentFrame++;

            if (currentFrame > totalFrames) {
                clearInterval(animationInterval);
                rocket.style.transform = 'rotate(360deg)';
                rocket.style.top = '15px';
            }
        }

        const animationInterval = setInterval(animateRocket, 50);
    });
});
