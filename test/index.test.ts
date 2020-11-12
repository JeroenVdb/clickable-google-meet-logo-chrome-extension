const rewire = require('rewire');

let script = rewire("../src/contentScript.ts");

describe('contentScript', function () {
	it('should create a valid Google Meet homepage url', function () {
		let createGoogleMeetHomeUrlFn = script.__get__('createGoogleMeetHomeUrl');
		const mock = jest.spyOn(global, 'location' as any);
		mock.mockReturnValue({
			href: 'https://meet.google.com'
		});
		expect(createGoogleMeetHomeUrlFn(location)).toBe('djksjflds');
	});
});
