// ==UserScript==
// @name         תיקון אתר תומכי תורה
// @namespace    https://github.com/HAKOL-MILEMALA/tomchei-tora-fix
// @version      2.0.3
// @description  הסתרת תפריט עליון בגלילה וביטול מגבלת שורות בהצגת מוצרים
// @author       HAKOL-MILEMALA
// @match        https://tomcheitora.org.il/*
// @updateURL    https://raw.githubusercontent.com/HAKOL-MILEMALA/tomchei-tora-fix/main/tomchei-tora-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/HAKOL-MILEMALA/tomchei-tora-fix/main/tomchei-tora-fix.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // ==========================================
    // 1. הוספת חוקי העיצוב (CSS)
    // ==========================================
    GM_addStyle(`
        /* ביטול מגבלת 3 שורות בכותרות המוצרים */
        p.line-clamp-3 {
            -webkit-line-clamp: unset !important;
            line-clamp: unset !important;
        }

        /* מניעת חיתוך ודאגה שהכרטיסייה גדלה עם הטקסט */
        div.group.flex.flex-col.overflow-hidden {
            height: 100% !important;
        }

        /* הגדרת תנועה חלקה לתפריט העליון */
        div.fixed.top-0.z-50 {
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* הגדרת תנועה חלקה לאזור התוכן הראשי */
        main {
            transition: padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* המחלקה ש"תעיף" את התפריט העליון מחוץ למסך */
        body.hide-header div.fixed.top-0.z-50 {
            transform: translateY(-130%) !important;
        }

        /* איפוס הרווח העליון של אזור התוכן כשהתפריט מוסתר */
        body.hide-header main {
            padding-top: 0px !important;
        }
    `);

    // ==========================================
    // 2. מנגנון הסתרת כותרת עליונה - מותאם לקונטיינר
    // ==========================================
    function initScrollLogic(scrollContainer) {
        let lastScrollY = scrollContainer.scrollTop;
        let scrollUpStartY = scrollContainer.scrollTop;
        const SCROLL_UP_THRESHOLD = 120; // סף גלילה למעלה כדי שהתפריט יחזור

        scrollContainer.addEventListener('scroll', function() {
            const currentScrollY = scrollContainer.scrollTop;

            if (currentScrollY > lastScrollY) {
                // -- אנחנו גוללים למטה --
                if (currentScrollY > 150) {
                    document.body.classList.add('hide-header');
                }
                scrollUpStartY = currentScrollY; // איפוס נקודת ההתחלה בגלילה למעלה

            } else if (currentScrollY < lastScrollY) {
                // -- אנחנו גוללים למעלה --
                if ((scrollUpStartY - currentScrollY) > SCROLL_UP_THRESHOLD || currentScrollY < 50) {
                    document.body.classList.remove('hide-header');
                }
            }

            lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        }, { passive: true });
    }

    // ==========================================
    // 3. איתור אלמנט הגלילה האמיתי של האתר
    // ==========================================
    const checkExist = setInterval(function() {
        const scrollContainer = document.querySelector('main div.overflow-y-auto');

        if (scrollContainer) {
            clearInterval(checkExist);
            initScrollLogic(scrollContainer);
        }
    }, 200);

})();
