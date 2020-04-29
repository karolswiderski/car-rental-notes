function openNavBox(x) {
    document.getElementById("left-menu-container").style.opacity = "1";
    document.getElementById("left-menu-container").style.background = "#1c1d22";

    if (x == 3) {
        document.getElementById("left-menu-container").style.width = "15%";
        document.getElementById("page-content").style.marginLeft = "15%";
    }
    if (x == 2) {
        document.getElementById("left-menu-container").style.width = "30%";
        document.getElementById("page-content").style.marginLeft = "30%";
    }
    if (x == 1) {
        document.getElementById("left-menu-container").style.width = "100%";
        document.getElementById("left-menu-container").style.height = "100%";
        document.getElementById("page-content").style.width = "100%";
    }

    document.getElementById("back-to-content-btn").style.display = "block";
    document.getElementById("logo-box").style.width = "80%";
    document.getElementById("left-menu-navigation").style.display = "block";
    document.getElementById("mmb-ul-element").style.display = "block";

    setTimeout(function () {
        document
            .getElementById("open-left-menu-i")
            .setAttribute("onclick", "closeNavBox(" + x + ")");
    }, 500);

    if (x == 3 || x == 2) {
        var cls = $("#open-left-menu-i i").attr("class");
        if (cls == "fas fa-bars") {
            $("#open-left-menu-i i").css({
                '-webkit-transform': 'rotate(45deg)',
                '-moz-transform': 'rotate(45deg)',
                '-ms-transform': 'rotate(45deg)',
                'transform': 'rotate(45deg)'
            });
            $("#open-left-menu-i i").removeClass("fas fa-bars");
            $("#open-left-menu-i i").addClass("fas fa-plus"); 
        }
    }
}

function closeNavBox(x) {
    document.getElementById("left-menu-container").removeAttribute("onmouseover");

    document.getElementById("left-menu-container").style.opacity = "0.1";
    document.getElementById("left-menu-container").style.background = "#6b5b95";
    

    if (x == 3 || x == 2 || x == 1) {
        document.getElementById("left-menu-container").style.width = "0.5%";
        document.getElementById("page-content").style.marginLeft = "0.5%";
    }

    document.getElementById("back-to-content-btn").style.display = "none";
    document.getElementById("logo-box").style.width = "0%";
    document.getElementById("left-menu-navigation").style.display = "none";
    document.getElementById("mmb-ul-element").style.display = "none";

    setTimeout(function () {
        document
            .getElementById("left-menu-container")
            .setAttribute("onmouseover", "openNav(" + x + ")");
        document
            .getElementById("open-left-menu-i")
            .setAttribute("onclick", "openNavBox(" + x + ")");
    }, 500);

    if (x == 3 || x == 2) {
        var cls = $("#open-left-menu-i i").attr("class");
        if (cls == "fas fa-plus") {
            $("#open-left-menu-i i").css({
                '-webkit-transform': 'rotate(0deg)',
                '-moz-transform': 'rotate(0deg)',
                '-ms-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });
            $("#open-left-menu-i i").removeClass("fas fa-plus");
            $("#open-left-menu-i i").addClass("fas fa-bars");
        }
    }
}