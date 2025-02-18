$(document).ready(function () {
    $(".team-member").click(function () {
        let targetModal = $(this).data("target");
        $(targetModal).fadeIn();
    });

    $(".btn-close, .modal-background").click(function (e) {
        if ($(e.target).hasClass("modal-background") || $(e.target).hasClass("btn-close")) {
            $(".modal-background").fadeOut();
        }
    });
});
