document.addEventListener('DOMContentLoaded', function(event) {
  getResults();
});

function getResults() {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'checkForWord' },
        function (response) {
          showResults(response.results);
        }
      );
    }
  );
}

function showResults(results) {
  var resultsElement = document.getElementById('results');
  resultsElement.innerHTML = results ?
    'This page uses prefetch/preload' :
    'This page doesn\'t use prefetch/preload';
}