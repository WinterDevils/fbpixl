/*****************************************************
 * Insert your pixels here. Please take note of the array format.
 *
 * Percentage trigger must be an integer between 0-100
 * Sample of multiple pixels: note the position of comma
 * [{ pixel_id: '<pixel_1', percentage: '30' },{ pixel_id: 'pixel_2', percentage: '40' } ]
 */

// var pixels = [{ pixel_id: '455742585039842', percentage: '90' }];

/***************************************************
 * Actual code, don't change things here
 */

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
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

var currentUrl = window.location.href;

document.addEventListener('DOMContentLoaded', function(event) {
	for (p of pixels) {
		const rand = Math.floor(Math.random() * 101);
		if (!currentUrl.includes('/thank_you') || rand < p.percentage) {
			fbq('init', p.pixel_id);
			fbq('set', 'autoConfig', 'true', p.pixel_id);
			fbq('track', 'PageView');
		}
		if (currentUrl.includes('/cart')) {
			for (let bt of document.querySelectorAll('[name="checkout"]')) {
				bt.addEventListener('click', function(event) {
					setTimeout(() => {
						fbq('track', 'InitiateCheckout');
					});
				});
			}
		}
		for (let bt of document.querySelectorAll('button.zpa-add-to-cart-btn')) {
			bt.addEventListener('click', function(event) {
				setTimeout(() => {
					fbq('track', 'AddToCart');
				});
			});
		}
	}
});
