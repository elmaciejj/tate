//UI

$('#Arrow2').hide();

$('#valueInput').keypress(function (e) {
    $('#Arrow2').fadeIn();
});

$('#valueInput').on('keypress', function (e) {
    return e.metaKey || // cmd/ctrl
        e.which <= 0 || // arrow keys
        e.which == 8 || // delete key
        /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})

$('#Arrow2').click(function (e) {
    $('#text2').hide();
    $('#text3').fadeIn();
});

$(function showTtext3() {
    $('#valueInput').keypress(function (event) {
        if (event.keyCode == 13 && this.value.length > 0) {
            $('#text2').hide();
            $('#text3').fadeIn();
        }
    });
});