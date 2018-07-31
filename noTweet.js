// Set the default state of the extension button and stream
let toolbar = "off";


// Function to toggle the tweet stream when invoked
function toggle(switcher) {

  if (switcher === 'off') {
    // When the button is clicked, turn it on
    // Update the state to reflect on-ness
    console.log("Extension enabled!");
    chrome.browserAction.setBadgeText({text: 'ON'});
    toolbar = 'on';

    // Hide the tweet stream and tweet button
    chrome.tabs.executeScript({file: 'js/hideTweet.js'});

  } else {

    // Or flip it off if it was on before clicked again
    console.log("Extension disabled!");
    chrome.browserAction.setBadgeText({text: ''});
    toolbar = 'off';

    // And show the tweet stream and tweet button again
    chrome.tabs.executeScript({file: 'js/showTweet.js'});
  };

}

chrome.browserAction.onClicked.addListener(function(tab) {
  // Invoke the toggle function when the toolbar is clicked
  toggle(toolbar);
});