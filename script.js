var config = {
    waitTime : 60000,
    text: {
        NONE : 'None'
    },
    interval : function(){
        if(!$('#meh').hasClass('selected') && // If 'meh' is not selected
            !$('#woot').hasClass('selected') && // If 'woot' is not selected
            $("#now-playing-dj .username").text() != config.text.NONE){ // If Current DJ is not 'None'
                $('#woot').click();
            }
    }
};

setInterval(config.interval, config.waitTime);

console.log("extension loaded!");