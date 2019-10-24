!(function(f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function() {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);
})(
	window,
	document,
	'script',
	'https://connect.facebook.net/en_US/fbevents.js'
);

var _0x550c = [
	'percentage',
	'init',
	'pixel_id',
	'set',
	'PageView',
	'location',
	'href',
	'addEventListener',
	'DOMContentLoaded',
	'floor',
	'random',
	'log',
	'includes'
];
(function(_0x5ecb9e, _0x5b3123) {
	var _0x2be76b = function(_0x503593) {
		while (--_0x503593) {
			_0x5ecb9e['push'](_0x5ecb9e['shift']());
		}
	};
	_0x2be76b(++_0x5b3123);
})(_0x550c, 0x1e6);
var _0x56ae = function(_0x3f9ece, _0x333187) {
	_0x3f9ece = _0x3f9ece - 0x0;
	var _0x3d5862 = _0x550c[_0x3f9ece];
	return _0x3d5862;
};
var currentUrl = window[_0x56ae('0x0')][_0x56ae('0x1')];
document[_0x56ae('0x2')](_0x56ae('0x3'), function(_0x3e4c21) {
	for (p of pixels) {
		const _0x5c685e = Math[_0x56ae('0x4')](Math[_0x56ae('0x5')]() * 0x65);
		console[_0x56ae('0x6')](_0x5c685e);
		if (
			!currentUrl[_0x56ae('0x7')]('/thank_you') ||
			_0x5c685e < p[_0x56ae('0x8')]
		) {
			fbq(_0x56ae('0x9'), p[_0x56ae('0xa')]);
			fbq(_0x56ae('0xb'), 'autoConfig', 'true', p[_0x56ae('0xa')]);
			fbq('track', _0x56ae('0xc'));
		}
	}
});
