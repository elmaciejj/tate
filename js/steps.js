$(function hideArrows() {
$('#Arrow1').hide();
$('#Arrow2').hide();
});

//STEP 1
$('#nameInput').keypress(function (e) {
$('#Arrow1').delay(600).fadeIn();
});

$('#Arrow1').click(function (e) {
    $('#text1').hide();
    $('#text2').fadeIn();
});


//STEP 2
$(function showText2() {
    $('#nameInput').keypress(function (event) {
        if (event.keyCode == 13 && this.value.length > 0) {
            $('#text1').hide();
            $('#text2').fadeIn();
        }
    });
});

$('#valueInput').keypress(function (e) {
    $('#Arrow2').fadeIn();
});

$('#Arrow2').click(function (e) {
    $('#text2').hide();
    $('#text3').fadeIn();
});



//STEP 3
$(function showTtext3() {
    $('#valueInput').keypress(function (event) {
        if (event.keyCode == 13 && this.value.length > 0) {
            $('#text2').hide();
            $('#text3').fadeIn();
        }
    });
});


//display name in 3 step
$("#nameInput").bind("keyup", changed).bind("change", changed);

function changed() {
    $("#nameOutput1").text(this.value);
}