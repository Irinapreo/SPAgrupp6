document.addEventListener("DOMContentLoaded", function() {
    var rocket = document.getElementById("rocket");
    var rocketHeight = rocket.offsetHeight;
    var stopOffset = 50;
    var maxBottom = window.innerHeight - rocketHeight - stopOffset;

    function handleScroll() {
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = window.scrollY / scrollHeight;
        var newTop = scrollPercent * maxBottom;
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
                rocket.style.top = '0px';
            }
        }

        const animationInterval = setInterval(animateRocket, 50);
    });
});
