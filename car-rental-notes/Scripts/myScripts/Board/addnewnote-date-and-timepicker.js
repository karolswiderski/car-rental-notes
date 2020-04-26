$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        duration: "fast"
    });
})



$(document).ready(function () {
    $('#timepicker1').timepicker({
        timeFormat: 'H:mm',
        interval: 15,
        minTime: '0',
        maxTime: '23:45pm',
        defaultTime: '11',
        startTime: '8:00',
        dynamic: true,
        dropdown: true,
        scrollbar: false
    });
})