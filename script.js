const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(document).ready(function () {
    $(".faq-question").click(function () {
        const currentAnswer = $(this).next(".faq-answer");
        $(".faq-answer").not(currentAnswer).slideUp();
        currentAnswer.stop(true, true).slideToggle();
    });

    $(".burger-symbol").click(function () {
        $(".burger-menu").slideToggle();
    });

    $(".formats-menu").click(function () {
        const format = $(this).next(".genres");
        format.slideToggle(400);
        $(".genres").not(format).slideUp();
    });
});