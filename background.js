browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  var url = new URL(tab.url)
  // var domain = url.hostname
  var fullURL = browser.runtime.getURL(url.origin);
  browser.tabs.update({ url: fullURL + "/archive" });
});
