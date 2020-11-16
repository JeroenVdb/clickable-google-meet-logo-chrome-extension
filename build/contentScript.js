"use strict";
function createClickableArea() {
    const area = document.createElement('a');
    area.setAttribute('href', createGoogleMeetHomeUrl());
    area.setAttribute('style', 'position: fixed; width: 400px; height: 64px; z-index: 5000');
    return area;
}
function createGoogleMeetHomeUrl() {
    let currentUrl = new URL(window.location.href);
    let homepageUrl = new URL(currentUrl.origin);
    let author = currentUrl.searchParams.get('authuser');
    if (author) {
        homepageUrl.searchParams.append('authuser', author);
    }
    return homepageUrl.toString();
}
document.body.append(createClickableArea());
//# sourceMappingURL=contentScript.js.map