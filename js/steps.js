    $(function text2(){
    $('#nameInput').on('keyup', function(event) {
        if (event.keyCode == 13) {    
            if(this.value.length > 0){
        $('#text2').show();
        $('#text1').hide();
        }
        else {
            $('#text2').hide();
        }
        }
        });
    });
    
    $(function text3(){
    $('#messageInput').on('keyup', function(event) {
        if (event.keyCode == 13) {    
            if(this.value.length > 0){
        $('#text3').show();
        $('#text2').hide();
        }
        else {
            $('#text3').hide();
        }
        }
        });
    });