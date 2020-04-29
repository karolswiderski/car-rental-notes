$("#ann-top-tools-box-3").click(function () {
    open("#add-new-ann-btn");
});

$("#mobile-ann-top-tools-box-3").click(function () {
    open("#mobile-add-new-ann-btn");
});

function open(x) {
    var cls = jQuery(x).attr("class");
    if (cls == "fas fa-plus be-center") {
        document.getElementById("add-new-ann").style.height = "auto";
        document.getElementById("add-new-ann").style.width = "100%";

        setTimeout(function () {
            document.getElementById("add-new-ann").style.display = "block";
        }, 50);

        setTimeout(function () {
            $(x).removeClass("fas fa-plus be-center");
            $(x).addClass("fas fa-angle-double-up be-center");
        }, 250);
    } else {
        setTimeout(function () {
            document.getElementById("add-new-ann").style.display = "none";

        }, 50);
        document.getElementById("add-new-ann").style.height = "0em";
        document.getElementById("add-new-ann").style.width = "0em";

        setTimeout(function () {
            $(x).removeClass("fas fa-angle-double-up be-center");
            $(x).addClass("fas fa-plus be-center");
        }, 250);
    }
}