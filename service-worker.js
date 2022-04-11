function addContextMenuEntries() {
    chrome.contextMenus.create({
        title: "Open link in the same tab",
        id: "openLinkInTheSameTab",
        contexts: ["link"]
    });
    chrome.contextMenus.onClicked.addListener((info) => {
        if (info.menuItemId == "openLinkInTheSameTab") {
            chrome.tabs.update({
                url: info.linkUrl
            });
        }
    });
}

chrome.runtime.onInstalled.addListener(() => {
    addContextMenuEntries();
});