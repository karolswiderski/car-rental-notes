var btn1 = true;
var btn2 = false;
var btn3 = false;

$("#myaccount-top-tools-box-1").click(function () {

    document.getElementById("myaccount-top-tools-box-2").style.backgroundColor = " #1c1d22";
    document.getElementById("myaccount-top-tools-box-3").style.backgroundColor = " #1c1d22";
    document.getElementById("myAccountDetails-partial").style.display = "none";
    document.getElementById("EditAccount-partial").style.display = "none";
    document.getElementById("myAccountDetails-partial").style.height = "0";
    document.getElementById("EditAccount-partial").style.height = "0";
    btn1 = true; btn2 = false; btn3 = false;
    //myOperations-partial 
    //myAccountDetails-partial

    

    setTimeout(function () {
        document.getElementById("myOperations-partial").style.height = "auto";
        document.getElementById("myOperations-partial").style.display = "block";
        document.getElementById("myaccount-top-tools-box-1").style.backgroundColor = "#6b5b95";
    }, 50);
});

$("#myaccount-top-tools-box-2").click(function () {

    document.getElementById("myaccount-top-tools-box-1").style.backgroundColor = " #1c1d22";
    document.getElementById("myaccount-top-tools-box-3").style.backgroundColor = " #1c1d22";
    document.getElementById("myOperations-partial").style.display = "none";
    document.getElementById("EditAccount-partial").style.display = "none";
    document.getElementById("myOperations-partial").style.height = "0";
    document.getElementById("EditAccount-partial").style.height = "0";
    btn1 = false; btn2 = true; btn3 = false;
    //myOperations-partial

    //myAccountDetails-partial

   //EditAccount

    setTimeout(function () {
        document.getElementById("myAccountDetails-partial").style.height = "auto";
        document.getElementById("myAccountDetails-partial").style.display = "block";
        document.getElementById("myaccount-top-tools-box-2").style.backgroundColor = "#6b5b95";
    }, 50);
});

$("#myaccount-top-tools-box-3").click(function () {

    document.getElementById("myaccount-top-tools-box-1").style.backgroundColor = " #1c1d22";
    document.getElementById("myaccount-top-tools-box-2").style.backgroundColor = " #1c1d22";
    document.getElementById("myOperations-partial").style.display = "none";
    document.getElementById("myAccountDetails-partial").style.display = "none";
    document.getElementById("myOperations-partial").style.height = "0";
    document.getElementById("myAccountDetails-partial").style.height = "0";
    btn1 = false; btn2 = false; btn3 = true;
    //myOperations-partial

    //myAccountDetails-partial

    //EditAccount

    setTimeout(function () {
        document.getElementById("EditAccount-partial").style.height = "auto";
        document.getElementById("EditAccount-partial").style.display = "block";
        document.getElementById("myaccount-top-tools-box-3").style.backgroundColor = "#6b5b95";
    }, 50);
});




// ----------------------------

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


function top_tools_mouseenter(tag){
    document.getElementById(tag).style.color = "white";
    document.getElementById(tag).style.backgroundColor = "#6b5b95";
}

function top_tools_mouseleave(tag) {
    document.getElementById(tag).style.color = "#b3b3cc";
    document.getElementById(tag).style.backgroundColor = "#1c1d22";
}