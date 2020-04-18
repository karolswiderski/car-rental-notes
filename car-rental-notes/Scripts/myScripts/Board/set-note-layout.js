function set_note_layout(rodzaj, id) {
    if (rodzaj == "WYDANIE") {
        set_colors(id, "#00b383", "#00b383", "#00cd96");

    } else if (rodzaj == "ODBIOR") {
        set_colors(id, "#cd0037", "#cd0037", "#e7003e");

    } else if (rodzaj == "PODMIANA") {
        set_colors(id, "#008ab3", "#008ab3", "#009ecd");

    } else if (rodzaj == "SERWIS") {
        set_colors(id, "#b38300", "#b38300", "#cd9600");

    } else if (rodzaj == "INNE") {
        set_colors(id, "#8ab300", "#8ab300", "#9ecd00");

    } else if (rodzaj == "OPONY") {
        set_colors(id, "#616582", "#616582", "#6c7091");
    }
};

function set_colors(id,c1,c2,c3) {
    $("#" + id + " .front-note-side").css("background-color", c1);
    $("#" + id + " .back-note-side").css("background-color", c2);
    $("#" + id + " .back-side-menu").css("background-color", c3);
}
