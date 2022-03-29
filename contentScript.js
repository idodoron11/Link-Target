// MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// var observer = new MutationObserver(function(mutations, observer) {
//   // fired when a mutation occurs
//   console.log("DOM has changed");
//   setTimeout(updateLinks, 5000);
// });

// // define what element should be observed by the observer
// // and what types of mutations trigger the callback
// observer.observe(document, {
//   subtree: true,
//   attributes: true
// });

if (document.readyState == 'complete') {
  onPageLoad();
} else {
  document.addEventListener('readystatechange', onPageLoad );
}

function onPageLoad() {
  repeat(updateLinks, 3, 5000);
}

function repeat(procedure, times, timeout) {
  if (times > 0) {
    procedure();
    console.log("Waiting " + timeout + " miliseconds.");
    setTimeout(() => {repeat(procedure, times - 1, timeout);}, timeout);
  }
  console.log(document.readyState);
}

function updateLinks() {
  console.log("Updating links");
  for (var i = 0, l = document.links.length; i < l; ++i) {
    link = document.links[i];
    if (link.getAttribute("target") == "_blank") {
      link.setAttribute("target", "_self");
    }
  }
}