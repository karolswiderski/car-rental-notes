$("#top-tools-box-5").click(function () {

    var cls = jQuery("#btn-addnewnote").attr("class");

    if (cls == "fas fa-angle-double-down") {

        document.getElementById("add-new-note-content").style.height = "40em";

        setTimeout(function () {
            document.getElementById("add-main-box").style.display = "block";

        }, 50);

        setTimeout(function () {
            $("#btn-addnewnote").removeClass("fa-angle-double-down");
            $("#btn-addnewnote").addClass("fa-angle-double-up");
        }, 250);

    } else {

        setTimeout(function () {
            document.getElementById("add-main-box").style.display = "none";

        }, 50);

        document.getElementById("add-new-note-content").style.height = "0em";

        setTimeout(function () {
            $("#btn-addnewnote").removeClass("fa-angle-double-up");
            $("#btn-addnewnote").addClass("fa-angle-double-down");
        }, 250);

    }

});
