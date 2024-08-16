document.addEventListener("DOMContentLoaded", function() {
    var rocket = document.getElementById("following-image");
    var initialTop = rocket.offsetTop;
    var rocketHeight = rocket.offsetHeight;
    var stopOffset = 50; // Adjust this value to set how much higher from the bottom the rocket should stop
    var maxBottom = window.innerHeight - rocketHeight - initialTop - stopOffset;

    function handleScroll() {
        // Calculate the total scrollable height
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Get the current scroll position as a percentage
        var scrollPercent = window.scrollY / scrollHeight;
        // Calculate the new top position for the rocket
        var newTop = initialTop + (scrollPercent * maxBottom);
        newTop = Math.min(newTop, maxBottom);
        if (newTop >= 0) {
            rocket.style.top = newTop + "px";
        }
    }

    window.addEventListener("scroll", handleScroll);
});



document.addEventListener("DOMContentLoaded", function() {
    function handleScroll() {
        // Calculate the total scrollable height
        var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Get the current scroll position as a percentage
        var scrollPercent = window.scrollY / scrollHeight;
        // Calculate the new background position
        var newPosition = scrollPercent * 100; // Adjust the multiplier as needed
        // Apply the new background position
        document.body.style.backgroundPosition = `center ${newPosition}%`;
    }

    window.addEventListener("scroll", handleScroll);
});
