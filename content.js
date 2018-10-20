chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === 'checkForWord') {
      checkForWord(request, sender, sendResponse);
      return true;
    }
  }
);

function checkForWord(request, sender, sendResponse) {
  var links = document.getElementsByTagName('link'),len = links.length,i = 0,pre=['prefetch','preload'];

  for (;i < len; i++) {
    if (pre.indexOf(links[i].rel.toLowerCase())!==-1) {
      return sendResponse({ results: 1 });
    }
  }
  return sendResponse({ results: 0 });
}