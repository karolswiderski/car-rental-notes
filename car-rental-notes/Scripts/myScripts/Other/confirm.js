$(function () {
    $(".delete").click(function () {
        if (!confirm("Potwierdzasz usunięcie wybranej pozycji?")) return false;
    });
});

$(function () {
    $(".change").click(function () {
        if (!confirm("Ta operacja jest już zajęta, czy na pewno chcesz to zrobić?")) return false;
    });
});

$(function () {
    $(".delete-two").click(function () {
        if (!confirm("Potwierdzasz usunięcie wybranej pozycji z historii Twojego konta?")) return false;
    });
});