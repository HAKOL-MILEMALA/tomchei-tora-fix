// ==UserScript==
// @name         שיפור האתר תומכי תורה
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  מיישר את גובה הכרטיסים ומציג טקסט מלא מבלי לשבור את עיצוב האתר
// @match        https://tomcheitora.org.il/*
// @grant        GM_addStyle
// @updateURL    https://github.com/HAKOL-MILEMALA/tomchei-tora-fix/raw/main/script.user.js
// @downloadURL  https://github.com/HAKOL-MILEMALA/tomchei-tora-fix/raw/main/script.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        div.bg-white.shadow-xl .line-clamp-2 {
            -webkit-line-clamp: unset !important;
            line-clamp: unset !important;
        }
        div.h-96.bg-white.shadow-xl.cursor-pointer {
            height: 100% !important;
            min-height: 24rem !important;
        }
    `);
})();
