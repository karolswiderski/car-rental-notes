function set_note_layout(rodzaj, id) {
    console.log("11");


    if (rodzaj == "WYDANIE") { // si
        console.log("jestem w wydanie");
        $("#" + id + " .front-note-side").css("background-color", "#00b383");
        $("#" + id + " .back-note-side").css("background-color", "#00b383");
        $("#" + id + " .back-side-menu").css("background-color", "#00cd96");

    } else if (rodzaj == "ODBIOR") { // ?
        console.log("jestem w odbiór");
        $("#" + id + " .front-note-side").css("background-color", "#cd0037");
        $("#" + id + " .back-note-side").css("background-color", "#cd0037");
        $("#" + id + " .back-side-menu").css("background-color", "#e7003e");

    } else if (rodzaj == "PODMIANA") { // ?
        console.log("jestem w podmiana");
        $("#" + id + " .front-note-side").css("background-color", "#008ab3");
        $("#" + id + " .back-note-side").css("background-color", "#008ab3");
        $("#" + id + " .back-side-menu").css("background-color", "#009ecd");

    } else if (rodzaj == "SERWIS") { // si
        console.log("jestem w serwis");
        $("#" + id + " .front-note-side").css("background-color", "#b38300");
        $("#" + id + " .back-note-side").css("background-color", "#b38300");
        $("#" + id + " .back-side-menu").css("background-color", "#cd9600");

    } else if (rodzaj == "INNE") { // si
        console.log("jestem w inne");
        $("#" + id + " .front-note-side").css("background-color", "#8ab300");
        $("#" + id + " .back-note-side").css("background-color", "#8ab300");
        $("#" + id + " .back-side-menu").css("background-color", "#9ecd00");

    } else if (rodzaj == "OPONY") {
        console.log("jestem w iopony");
        $("#" + id + " .front-note-side").css("background-color", "#616582");
        $("#" + id + " .back-note-side").css("background-color", "#616582");
        $("#" + id + " .back-side-menu").css("background-color", "#6c7091");

    }
};