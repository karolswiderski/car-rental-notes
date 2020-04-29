$("#top-tools-box-5").click(function () {
    show("#btn-addnewnote");
});

$("#mobile-top-tools-box-5").click(function () {
    show("#mobile-btn-addnewnote");
});

function show(varOne) {
    var cls = jQuery(varOne).attr("class");
    if (cls == "fas fa-angle-double-down") {
        document.getElementById("add-new-note-content").style.height = "auto";
        setTimeout(function () {
            document.getElementById("add-main-box").style.display = "block";
        }, 50);
        setTimeout(function () {
            $(varOne).removeClass("fa-angle-double-down");
            $(varOne).addClass("fa-angle-double-up");
        }, 250);

    } else {
        setTimeout(function () {
            document.getElementById("add-main-box").style.display = "none";
        }, 50);
        document.getElementById("add-new-note-content").style.height = "0em";
        setTimeout(function () {
            $(varOne).removeClass("fa-angle-double-up");
            $(varOne).addClass("fa-angle-double-down");
        }, 250);
    }
}
