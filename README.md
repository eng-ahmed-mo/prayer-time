# Prayer Times / مواقيت الصلاة

A modern web application that displays accurate prayer times based on your current geographical location. The interface is designed in Arabic and provides a clean, user-friendly experience.

هذا تطبيق ويب حديث يعرض مواقيت الصلاة بدقة بناءً على موقعك الجغرافي الحالي. تم تصميم الواجهة باللغة العربية وتوفر تجربة مستخدم سهلة ومريحة.

![Prayer Times Preview](./screenshot.png)

## Features / المميزات

- **Automatic Location Detection**: Uses the browser's Geolocation API to detect your latitude and longitude automatically.
- **Accurate Prayer Times**: Fetches precise prayer times from the [Aladhan API](https://aladhan.com/prayer-times-api).
- **Real-time Clock**: Displays the current time and date in Arabic.
- **Next Prayer Countdown**: Highlights the next prayer and shows a live countdown timer until the call to prayer.
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablets, and mobile devices.

- **تحديد الموقع تلقائياً**: يستخدم واجهة Geolocation API في المتصفح لتحديد موقعك الجغرافي بدقة.
- **مواقيت صلاة دقيقة**: يجلب مواقيت الصلاة الموثوقة من [API الآذان](https://aladhan.com/prayer-times-api).
- **ساعة في الوقت الفعلي**: يعرض الوقت والتاريخ الهجري والميلادي (حسب التوفر) باللغة العربية.
- **العد التنازلي للصلاة القادمة**: يقوم بتمييز الصلاة القادمة ويعرض عداد تنازلي حي حتى موعد الأذان.
- **تصميم متجاوب**: تخطيط متجاوب يعمل بسلاسة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف المحمولة.

## Technologies Used / التقنيات المستخدمة

- **HTML5**: For semantic structure.
- **CSS3**: For styling, animations, and responsive design.
- **JavaScript (ES6+)**: For application logic and DOM manipulation.
- **Axios**: For handling HTTP requests to the Aladhan API.

## How to Run / كيفية التشغيل

1. **Clone the repository** (or download usage files):
   - قم باستنساخ المستودع (أو تحميل الملفات).
   ```bash
   git clone https://github.com/eng-ahmed-mo/prayer-time.git
   ```

2. **Open the application**:
   - Simply open the `index.html` file in your preferred web browser.
   - ببساطة افتح ملف `index.html` في متصفح الويب المفضل لديك.

3. **Allow Location Access**:
   - When prompted, allow the browser to access your location. This is required for the app to fetch the correct prayer times for your city.
   - عند طلب الإذن، اسمح للمتصفح بالوصول إلى موقعك. هذا ضروري لكي يتمكن التطبيق من جلب مواقيت الصلاة الصحيحة لمدينتك.

## Credits / الحقوق

- Developed by **Eng. Ahmed Mohamed**.
- Prayer times data provided by [Aladhan API](https://aladhan.com/).
