mobile();
function mobile() {
    const mql = window.matchMedia("screen and (max-width: 575px)");

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql) {
        if (mql.matches) {
            document.getElementById("left-menu-container").setAttribute("onmouseover", "openNavBox(1)");
            document.getElementById("open-close-left-menu").setAttribute("onmouseover", "openNavBox(1)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(1)");

            document.getElementById("top-tools-bar").style.display = "none";

            console.log("Mobile");
        }
    }
}



tablet();
function tablet() {
    const mql = window.matchMedia(
        "screen and (min-width: 576px) and (max-width: 991px)"
    );

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql) {
        if (mql.matches) {
            document.getElementById("left-menu-container").setAttribute("onmouseover", "openNavBox(2)");
            document.getElementById("open-close-left-menu").setAttribute("onmouseover", "openNavBox(2)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(2)");

            document.getElementById("top-tools-bar").style.display = "flex";
            document.getElementById("top-tools-bar").style.height = "5%";

            console.log("tablet");
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
            document.getElementById("left-menu-container").setAttribute("onmouseover", "openNavBox(3)");
            document.getElementById("open-close-left-menu").setAttribute("onmouseover", "openNavBox(3)");
            document.getElementById("back-to-content-btn").setAttribute("onclick", "closeNavBox(3)");

            document.getElementById("top-tools-bar").style.display = "flex";
            document.getElementById("top-tools-bar").style.fontSize = "1.5vw";
            document.getElementById("top-tools-bar").style.height = "4vw";

            console.log("desktop");
        }
    }
}
