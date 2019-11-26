browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({url: tab.url + "archive"});
  
});

browser.pageAction.onClicked.addListener(function () {
});