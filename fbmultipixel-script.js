!(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
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

var currentUrl = window.location.href;

document.addEventListener('DOMContentLoaded', function(event) {
    for (p of pixels || []) {
        const rand = Math.floor(Math.random() * 101);
        // console.log(p, rand, rand < p.percentage);
        if (!currentUrl.includes('/thank_you') || rand < p.percentage) {
            // console.log(p.pixel_id, 'initialized');
            fbq('init', p.pixel_id);
            fbq('set', 'autoConfig', 'true', p.pixel_id);
            fbq('track', 'PageView');
        }
    }

    document.addEventListener(
        'click',
        function(event) {
            if (
                event.target.matches(
                    '.cart__checkout, [name="checkout"], a[href="/checkout"]'
                )
            ) {
                setTimeout(() => {
                    fbq('track', 'InitiateCheckout');
                });
            }
        },
        false
    );

    document.addEventListener(
        'click',
        function(event) {
            if (
                event.target.matches(
                    '.zpa-add-to-cart-btn, [data-zp-add-to-cart]'
                )
            ) {
                setTimeout(() => {
                    fbq('track', 'AddToCart');
                });
            }
        },
        false
    );
});
