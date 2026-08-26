# 🛒 תומכי תורה - תיקון ממשק וצפייה משופרת

סקריפט משתמש (Userscript) לתוסף Tampermonkey המנהל דינמית את תפריט האתר **תומכי תורה**, מעלים אותו בזמן גלילה למטה ומחזיר אותו בגלילה למעלה, תוך שמירה על רצף תצוגה תקין של המוצרים.

---

## 🚀 התקנה מהירה

1. ודאו שמותקן בדפדפן התוסף **Tampermonkey** ([Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)).
2. לחצו על הכפתור למטה להתקנת הסקריפט:

[![התקן סקריפט](https://img.shields.io/badge/Click_to_Install-Tampermonkey-047857?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://raw.githubusercontent.com/HAKOL-MILEMALA/tomchei-tora-fix/main/tomchei-tora-fix.user.js)

*(לחילופין, [לחצו כאן להתקנה ישירה](https://raw.githubusercontent.com/HAKOL-MILEMALA/tomchei-tora-fix/main/tomchei-tora-fix.user.js))*

---

## ✨ תכונות עיקריות

* **הסתרת תפריט חכמה:** התפריט העליון נעלם חלקית בגלילה למטה כדי להגדיל את שטח הצפייה במוצרים, וחוזר בגלילה קלה למעלה.
* **תיקון גלילה פנימית:** התאמה מלאה למבנה ה-Next.js של האתר (מזהה גלילה בתוך קונטיינרים פנימיים).
* **מניעת חיתוך מוצרים:** איפוס מתוזמן של ה-`padding-top` בבלוק הראשי ברגע שהתפריט נעלם, כך שכרטיסיות המוצרים לא נחתכות.
* **תצוגת כותרות מלאה:** ביטול מגבלת 3 השורות (`line-clamp`) בכותרות המוצרים להצגת השם המלא.
* **עדכונים אוטומטיים:** הסקריפט מוגדר לקבלת עדכונים אוטומטיים ישירות מ-GitHub ברגע שמשתחררת גרסה חדשה.
