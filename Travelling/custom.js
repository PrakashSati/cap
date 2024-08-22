const slider = document.querySelector(".slider");

function activate(e) {
    const items = document.querySelectorAll(".item");
    e.target.matches(".next") && slider.append(items[0]);
    e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

function autoPlay() {
    setInterval(function () {
        const nextButton = document.querySelector('.next');
        nextButton.click();
    }, 3000); // Adjust the interval (in milliseconds) as needed
}

document.addEventListener("click", activate, false);

autoPlay(); // Call the autoplay function to start it



$(document).ready(function () {
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn-1').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});