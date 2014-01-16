var config = {
    waitTime : 60000,
    on: true,
    dj: true,
    text: {
        NONE : 'None',
        CLICK_TO_DJ: 'Click to DJ'
    },
    interval : function(){
        console.log("Interval");
        if(config.dj && $('#dj-button span').text() == config.text.CLICK_TO_DJ){
            $('#dj-button').click();
            console.log('Adding myself back to the waitlist');
        }
        
        if(config.on && // If bot is turned on
            API.getUser().username != API.getDJ().username && // The logged in user is not the current DJ
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