let interface = true;

$('.hide').click(function () {
    if (interface==true) {
        $('.G').css("visibility", "hidden");
        interface = false;
    }else {
        $('.G').css("visibility", "visible");
        interface = true;
    }
});