console.log("app is alive")

function switchChannel(channelName){
    console.log('Tuning into channel' + channelName)
    $('#rightName').html(channelName);
    $('#location').html('<a href="http://w3w.co/upgrading.never.helps">upgrading.never.helps</a>');

    toggleImg();
}

function toggleImg() {
    $('.imgh1').toggle();  
  }

