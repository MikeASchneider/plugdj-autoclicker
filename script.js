var config = {
    waitTime : 20000,
    on: true,
    text: {
        NONE : 'None'
    },
    interval : function(){
        console.log("Interval");
        //if(this.clickBotOn && // if ClickBot is on
        if(!$('#meh').hasClass('selected') && // If 'meh' is not selected
            !$('#woot').hasClass('selected') && // If 'woot' is not selected
            $("#now-playing-dj .username").text() != this.text.NONE){ // If Current DJ is not 'None'
                console.log("Clicked");
                $('#woot').click();
                /*if(this.alwaysClickWoot){
                    $('#woot').click();
                }
                else{
                    $('#meh').click();
                }*/
            }
    },
    clickBotOn: true,   // Will Always Click woot or meh
    alwaysClickWoot: true   // Set the false to vote meh
};

setInterval(config.interval, config.waitTime);

console.log("extension loaded!");