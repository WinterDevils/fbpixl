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
	console.log('fbpixl');
	for (p of pixels) {
		const rand = Math.floor(Math.random() * 101);
		if (!currentUrl.includes('/thank_you') || rand < p.percentage) {
			fbq('init', p.pixel_id);
			fbq('set', 'autoConfig', 'true', p.pixel_id);
			fbq('track', 'PageView');
		}
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
			console.log('fbclick');
			fbq('track', 'AddToCart');
		});
	}
});
