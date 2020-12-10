
$(document).ready(function () {
    $("#submitboton").click(function (e) {
        $(".is-preload").css("filter","blur(1px)" );
        $(".initiallyHidden").css("visibility", "visible");
     });
});