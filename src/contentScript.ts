function createClickableArea() {
	const area = document.createElement('a');
	area.setAttribute('href', createGoogleMeetHomeUrl());
	area.setAttribute('style', 'position: fixed; width: 100px; height: 100px; z-index: 5000');
	return area;
}

function createGoogleMeetHomeUrl(): string {
	let currentUrl = new URL(window.location.href);
	let homepageUrl = new URL(currentUrl.origin);

	if (currentUrl.searchParams.has('authuser')) {
		homepageUrl.searchParams.append('authuser', currentUrl.searchParams.get('authuser')!)
	}

	return homepageUrl.toString();
}

document.body.append(createClickableArea());
