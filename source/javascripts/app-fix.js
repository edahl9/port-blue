$(document).ready(function() {
    $("#msg-toggle").on('click', function() {
        if ($("#msg-center").hasClass("msg-show")) {
            $("#msg-center").removeClass("msg-show");

        } else {
            $("#msg-center").addClass("msg-show");

        }
    });

    $(".message-input").on('click', function() {
        $(".message-view .error").removeClass("hide");

    });
    setTimeout(
        function() {
            $("#msg-center").addClass("msg-show");
        }, 5000);

    


});
