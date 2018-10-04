// Set the default state of the extension button and stream
let toolbar = "off";
let tnd, d, today;

d = new Date();
today = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`

if (today === '6/30/2018') {
  tnd = true;
} else {
  tnd = false;
}

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

function closeTwitter(tab) {
  if (tab.url === 'twitter.com') {
    chrome.tabs.remove(tab);
  }
};

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
  let url = tabs[0].url;
  console.log(url);
});

// Check the date on tab update and if it's Tweet Nothing Day
// prevent opening twitter.com
chrome.tabs.onUpdated.addListener(function(Tab) {

  if (tnd === true) {
    console.log(Tab.url);
    // closeTwitter(tab);
  }
});

// Add the listener to toggle the tweet stream and button
chrome.browserAction.onClicked.addListener(function() {
  // Invoke the toggle function when the toolbar is clicked
  toggle(toolbar);
});