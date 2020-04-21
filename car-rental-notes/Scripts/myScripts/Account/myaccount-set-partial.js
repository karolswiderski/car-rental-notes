$("#myaccount-top-tools-box-1").click(function () {
    
    document.getElementById("myAccountDetails-partial").style.display = "none";
    document.getElementById("myAccountDetails-partial").style.height = "0";

    //myOperations-partial

    //myAccountDetails-partial

    document.getElementById("myOperations-partial").style.height = "auto";

    setTimeout(function () {
        document.getElementById("myOperations-partial").style.display = "block";
    }, 50);



});

$("#myaccount-top-tools-box-5").click(function () {
    document.getElementById("myOperations-partial").style.display = "none";
    document.getElementById("myOperations-partial").style.height = "0";
    //myOperations-partial

    //myAccountDetails-partial

    document.getElementById("myAccountDetails-partial").style.height = "auto";

    setTimeout(function () {
        document.getElementById("myAccountDetails-partial").style.display = "block";
    }, 50);



});