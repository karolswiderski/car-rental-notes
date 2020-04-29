var btn1 = false;
var btn2 = true;
var btn3 = false;

// -- Operacja zmiany wyświetlanego partiala (obsługa css):

$("#myaccount-top-tools-box-1").click(function () {
    change_partial("myOperations-history-partial", 1,
        "myOperations-today-partial", 2,
        "myOperations-future-partial", 3);
});

$("#myaccount-top-tools-box-2").click(function () {
    change_partial("myOperations-today-partial", 2,
        "myOperations-history-partial", 1,
        "myOperations-future-partial", 3);
});

$("#myaccount-top-tools-box-3").click(function () {
    change_partial("myOperations-future-partial", 3,
        "myOperations-history-partial", 1,
        "myOperations-today-partial", 2);
});


function change_partial(showString, showNumber, hideString1, hideNumber1, hideString2, hideNumber2) {
    document.getElementById("myaccount-top-tools-box-" + hideNumber1).style.backgroundColor = " #1c1d22";
    document.getElementById("myaccount-top-tools-box-" + hideNumber2).style.backgroundColor = " #1c1d22";
    document.getElementById(hideString1).style.display = "none";
    document.getElementById(hideString2).style.display = "none";
    document.getElementById(hideString1).style.height = "0";
    document.getElementById(hideString2).style.height = "0";

    if (showNumber == 1) {
        btn1 = true; btn2 = false; btn3 = false;
    } else if (showNumber == 2) {
        btn1 = false; btn2 = true; btn3 = false;
    } else if (showNumber == 3) {
        btn1 = false; btn2 = false; btn3 = true;
    }

    setTimeout(function () {
        document.getElementById(showString).style.height = "auto";
        document.getElementById(showString).style.display = "block";
        document.getElementById("myaccount-top-tools-box-" + showNumber).style.backgroundColor = "#6b5b95";
    }, 50);
}

// -- Operacje najechania na przycisk innego partiala: 

$("#myaccount-top-tools-box-1").mouseenter(function () {
    top_tools_mouseenter("myaccount-top-tools-box-1");
});

$("#myaccount-top-tools-box-1").mouseleave(function () {
    if (btn1 == false) {
        top_tools_mouseleave("myaccount-top-tools-box-1");
    }
});

$("#myaccount-top-tools-box-2").mouseenter(function () {
    top_tools_mouseenter("myaccount-top-tools-box-2");
});

$("#myaccount-top-tools-box-2").mouseleave(function () {
    if (btn2 == false) {
        top_tools_mouseleave("myaccount-top-tools-box-2");
    }
});

$("#myaccount-top-tools-box-3").mouseenter(function () {
    top_tools_mouseenter("myaccount-top-tools-box-3");
});

$("#myaccount-top-tools-box-3").mouseleave(function () {
    if (btn3 == false) {
        top_tools_mouseleave("myaccount-top-tools-box-3");
    }
});


function top_tools_mouseenter(tag) {
    document.getElementById(tag).style.color = "white";
    document.getElementById(tag).style.backgroundColor = "#6b5b95";
}

function top_tools_mouseleave(tag) {
    document.getElementById(tag).style.color = "#b3b3cc";
    document.getElementById(tag).style.backgroundColor = "#1c1d22";
}



// -- mobile:

$("#mobile-myaccount-top-tools-box-1").click(function () {
    change_partial("myOperations-history-partial", 1,
        "myOperations-today-partial", 2,
        "myOperations-future-partial", 3);
});

$("#mobile-myaccount-top-tools-box-2").click(function () {
    change_partial("myOperations-today-partial", 2,
        "myOperations-history-partial", 1,
        "myOperations-future-partial", 3);
});

$("#mobile-myaccount-top-tools-box-3").click(function () {
    change_partial("myOperations-future-partial", 3,
        "myOperations-history-partial", 1,
        "myOperations-today-partial", 2);
});

$("#mobile-myaccount-top-tools-box-1").click(function () {
    top_tools_mouseleave("mobile-myaccount-top-tools-box-2");
    top_tools_mouseleave("mobile-myaccount-top-tools-box-3");
    top_tools_mouseenter("mobile-myaccount-top-tools-box-1");
});

$("#mobile-myaccount-top-tools-box-2").click(function () {
    top_tools_mouseleave("mobile-myaccount-top-tools-box-3");
    top_tools_mouseleave("mobile-myaccount-top-tools-box-1");
    top_tools_mouseenter("mobile-myaccount-top-tools-box-2");
});

$("#mobile-myaccount-top-tools-box-3").click(function () {
    top_tools_mouseleave("mobile-myaccount-top-tools-box-2");
    top_tools_mouseleave("mobile-myaccount-top-tools-box-1");
    top_tools_mouseenter("mobile-myaccount-top-tools-box-3");
});
