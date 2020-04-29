mobile();
function mobile() {
    const mql = window.matchMedia("screen and (max-width: 575px)");

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql) {
        if (mql.matches) {
            document.getElementById("open-left-menu-i").setAttribute("onclick", "openNavBox(1)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(1)");
        }
    }
}

tablet();
function tablet() {
    const mql = window.matchMedia("screen and (min-width: 576px) and (max-width: 991px)");

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql) {
        if (mql.matches) {
            document.getElementById("open-left-menu-i").setAttribute("onclick", "openNavBox(2)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(2)");
            document.getElementById("top-tools-bar").style.height = "5%";
        }
    }
}

desktop();
function desktop() {
    const mql = window.matchMedia("screen and (min-width: 992px)");

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql) {
        if (mql.matches) {
            document.getElementById("open-left-menu-i").setAttribute("onclick", "openNavBox(3)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(3)");
            document.getElementById("top-tools-bar").style.fontSize = "1.5vw";
            document.getElementById("top-tools-bar").style.height = "3vw";
        }
    }
}
