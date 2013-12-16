var config = {
    waitTime : 60000,
    text : {
        NONE : 'None'
    }
};

setInterval(function() {
  if(!$('#meh').hasClass('selected') && $("#now-playing-dj .username").text() != config.text.NONE ) {
    $('#woot').click();
  }
}, config.waitTime);

