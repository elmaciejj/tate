//send name and debt to the firebase
var fb = new Firebase("https://tate.firebaseio.com/tatee");

$('#valueInput').keypress(function (e) {
    if (e.keyCode == 13 && this.value.length > 0) {
        var name = $('#nameInput').val();
        var value = $('#valueInput').val();
        fb.push({
            name: name,
            value: value
        });
    }
});

//receive name and debt from firebase
fb.on('child_added', function (snapshot) {
    var message = snapshot.val();
    displayValues(message.name, message.value);
});

function displayValues(name, value) {
    $('<tr/>').html('<td>' + name + '</td><td>' + value + '</td>').appendTo($('#debtorsList'));
};