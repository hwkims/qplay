/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function() {
    var w = window,
        C = '___grecaptcha_cfg',
        cfg = w[C] = w[C] || {},
        N = 'grecaptcha';
    var E = 'enterprise',
        a = w[N] = w[N] || {},
        gr = a[E] = a[E] || {};
    gr.ready = gr.ready || function(f) {
        (cfg['fns'] = cfg['fns'] || []).push(f);
    };
    w['__recaptcha_api'] = 'https://www.google.com/recaptcha/enterprise/';
    (cfg['enterprise'] = cfg['enterprise'] || []).push(true);
    (cfg['render'] = cfg['render'] || []).push('onload');
    w['__google_recaptcha_client'] = true;
    var d = document,
        po = d.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.charset = 'utf-8';
    var v = w.navigator,
        m = d.createElement('meta');
    m.httpEquiv = 'origin-trial';
    m.content = 'Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=';
    if (v && v.cookieDeprecationLabel) {
        v.cookieDeprecationLabel.getValue().then(function(l) {
            if (l !== 'treatment_1.1' && l !== 'treatment_1.2' && l !== 'control_1.1') {
                d.head.prepend(m);
            }
        });
    } else {
        d.head.prepend(m);
    }
    po.src = 'https://www.gstatic.com/recaptcha/releases/rKbTvxTxwcw5VqzrtN-ICwWt/recaptcha__ko.js';
    po.crossOrigin = 'anonymous';
    po.integrity = 'sha384-VrROgno6Y3KrKOu/xCxSGiGKiCRAzFUdNlmK4G9apVAJ5ZmIr5FcTVyaV5RmqCr1';
    var e = d.querySelector('script[nonce]'),
        n = e && (e['nonce'] || e.getAttribute('nonce'));
    if (n) {
        po.setAttribute('nonce', n);
    }
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();