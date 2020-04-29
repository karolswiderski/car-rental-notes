$(".single-note-box").hover(function (event) {
    var id = jQuery(this).attr("id");
    var ak = jQuery(this).attr("accesskey");

    if (ak == 9) {
        setTimeout(function () {
            $("#" + id + " .front-note-side").toggle(false);
            $("#" + id + " .back-note-side").toggle(true);
            $("#" + id).attr("accesskey", 8);
        }, 10);
    } else if (ak == 8) {
        setTimeout(function () {
            $("#" + id + " .back-note-side").toggle(false);
            $("#" + id + " .front-note-side").toggle(true);
            $("#" + id).attr("accesskey", 9);
        }, 10);
    }
});

$(".single-note-box").click(function (event) {
    var id = jQuery(this).attr("id");
    var ak = jQuery(this).attr("accesskey");

    if (ak == 8) {
        setTimeout(function () {
            $("#" + id + " .back-note-side").toggle(true);
            $("#" + id + " .front-note-side").toggle(false);
            $("#" + id).attr("accesskey", 5);
        }, 10);
    } else if (ak == 5) { 
        $("#" + id + " .back-note-side").toggle(false);
        $("#" + id + " .front-note-side").toggle(true);
        $("#" + id).attr("accesskey", 8);
    }
});

function show_back_menu(x) {
    x.style.height = "10%";
    $(".add-btn-box").css("display", "block");
    $(".edit-btn-box").css("display", "block");
    $(".delete-btn-box").css("display", "block");
};

function hide_back_menu(x) {
    x.style.height = "3%";
    $(".add-btn-box").css("display", "none");
    $(".edit-btn-box").css("display", "none");
    $(".delete-btn-box").css("display", "none");
};
