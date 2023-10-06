
import { useEffect } from 'react';

const GoogleTagManager: React.FC = () => {
    useEffect(() => {
        (function(w, d, s, l, i) {
            // @ts-ignore
            w[l] = w[l] || [];
            // @ts-ignore
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            // @ts-ignore
            j.async = true;
            // @ts-ignore
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode!.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MMQ3M5H3');
    }, []);

    return (
        <noscript>
            {/* Google Tag Manager (noscript) */}
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MMQ3M5H3"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
            {/* End Google Tag Manager (noscript) */}
        </noscript>
    );
};

export default GoogleTagManager;
