$(function () {
    $(".delete").click(function () {
        if (!confirm("Potwierdzasz usunięcie wybranej pozycji?")) return false;
    });
});