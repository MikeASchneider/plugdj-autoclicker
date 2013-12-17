var config = {
    waitTime : 60000,
    on: true,
    text: {
        NONE : 'None'
    },
    interval : function(){
        console.log("Interval");
        if(config.on && // If bot is turned on
            !$('#meh').hasClass('selected') && // If 'meh' is not selected
            !$('#woot').hasClass('selected') && // If 'woot' is not selected
            $("#now-playing-dj .username").text() != config.text.NONE){ // If Current DJ is not 'None'
                console.log("Clicked");
                if(config.alwaysUpvote){
                    $('#woot').click();
                }
                else{
                    $('#meh').click();
                }
            }
    },
    alwaysUpvote: true
};

setInterval(config.interval, config.waitTime);

console.log("extension loaded!");