﻿console.log("??");


$("#ann-top-tools-box-3").click(function () {
    console.log("?dd");
    var cls = jQuery("#add-new-ann-btn").attr("class");

    if (cls == "fas fa-plus be-center") {

        document.getElementById("add-new-ann").style.height = "auto";
        document.getElementById("add-new-ann").style.width = "100%";

        setTimeout(function () {
            document.getElementById("add-new-ann").style.display = "block";

        }, 50);

        setTimeout(function () {
            $("#add-new-ann-btn").removeClass("fas fa-plus be-center");
            $("#add-new-ann-btn").addClass("fas fa-angle-double-up be-center");
        }, 250);
        console.log("?2?");
    } else {

        setTimeout(function () {
            document.getElementById("add-new-ann").style.display = "none";

        }, 50);

        document.getElementById("add-new-ann").style.height = "0em";
        document.getElementById("add-new-ann").style.width = "0em";

        setTimeout(function () {
            $("#add-new-ann-btn").removeClass("fas fa-angle-double-up be-center");
            $("#add-new-ann-btn").addClass("fas fa-plus be-center");
        }, 250);

    }

});
