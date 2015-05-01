//Database IO
var fb = new Firebase("https://tate.firebaseio.com/tatee");

$('#fbLogin').click(function (e) {
    fb.authWithOAuthPopup("facebook", function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            var fbName = authData.facebook.displayName;
            var FireBaseUID = authData.uid;
            $('#fbName').text(fbName);
            $('#fbName2').text(fbName);
            $('#text1').hide();
            $('#text2').fadeIn();
            $('#valueInput').keypress(function (e) {
                if (e.keyCode == 13 && this.value.length > 0) {
                    var value = $('#valueInput').val();
                    fb.push({
                        uid: FireBaseUID,
                        name: fbName,
                        value: value
                    });
                }
            });  
        }
    });
});


//receive name and debt from firebase
fb.on('child_added', function (snapshot) {
    var message = snapshot.val();
    displayValues(message.name, message.value);
});

function displayValues(name, value) {
    $('<tr/>').html('<td>' + name + '</td><td>' + value + '</td>').appendTo($('#debtorsList'));
};