function open_addnewnote() {
    console.log("aaaa");
    $(".enter-data").hide();
    $(".rodzaj-operacji").show();
}

function choose_operation(list) {
    var my_list_id = jQuery(list).attr("Id");
    var opt_value = $("#" + my_list_id).children("option:selected").val();

    if (opt_value == 1) { //wydanie
        $(".enter-data").show();
    }
    else if (opt_value == 2) { //odbiór
        $(".enter-data").show();
    }
    else if (opt_value == 3) { //podmiana
        $(".enter-data").show();
    }
    else if (opt_value == 4) { //serwis
        $(".enter-data").show();
        $(".nazwa-klienta").hide();
        $(".telefon").hide();
        $(".zlecajacy").hide();
        $(".klasa-pojazdu").hide();
    }
    else if (opt_value == 5) { //opony
        $(".enter-data").show();
        $(".nazwa-klienta").hide();
        $(".zlecajacy").hide();
        $(".telefon").hide();
        $(".klasa-pojazdu").hide();
    }
    else if (opt_value == 6) { //inne
        $(".enter-data").show();
        $(".nazwa-klienta").hide();
        $(".zlecajacy").hide();
        $(".telefon").hide();
        $(".klasa-pojazdu").hide();
    }

}
