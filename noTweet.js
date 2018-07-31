// Set the default state of the extension button and stream
let toolbar = "off";


chrome.browserAction.onClicked.addListener(function(tab) {

  if (toolbar === 'off') {
    // When the button is clicked, turn it on
    // Update the state to reflect on-ness
    console.log("Extension enabled!");
    chrome.browserAction.setBadgeText({text: 'ON'});
    toolbar = 'on';

    // Hide the tweet stream
    chrome.tabs.executeScript({file: 'js/hideTweet.js'});

  } else {

    // Or flip it off if it was on before clicked again
    console.log("Extension disabled!");
    chrome.browserAction.setBadgeText({text: ''});
    toolbar = 'off';

    // And show the tweet stream again
    chrome.tabs.executeScript({file: 'js/showTweet.js'});
  };

});