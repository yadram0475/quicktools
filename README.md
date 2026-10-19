# Khojiman.com — Login Integration

मौजूदा homepage सुरक्षित रखी गई है। नई फाइलें: login.html, register.html, forgot-password.html, customer.html, admin.html, auth.js, firebase-config.js, firestore.rules, set-admin.cjs.

## शुरू करने के चरण
1. Firebase Console > Project settings > Your apps > Config से `firebase-config.js` में **apiKey, messagingSenderId, appId** के सही मान भरें (अन्य मान भी जाँचें)। यह WEB config है। कभी service-account private key यहाँ न डालें।
2. Firebase Authentication > Settings > Authorized domains में `khojiman.com`, `www.khojiman.com` और इस्तेमाल होने वाला GitHub Pages domain जोड़ें।
3. Firebase Authentication > Sign-in method में Email/Password Enabled रखें।
4. Firestore Rules में `firestore.rules` को सावधानी से जाँचकर Publish करें; मौजूदा Rules बदलने से पहले बैकअप लें।
5. अपने कंप्यूटर पर Admin SDK से `admin:true` custom claim सेट करें: Node.js install, `npm install firebase-admin`; निजी service account JSON को GitHub से बाहर सुरक्षित रखें; GOOGLE_APPLICATION_CREDENTIALS को JSON path पर सेट करके `node set-admin.cjs AUTH_UID` चलाएँ। सिर्फ विश्वसनीय admin UID के लिए। इसके बाद admin sign-out और sign-in करे। यह script GitHub Pages में नहीं चलाना है।
6. सभी public files GitHub Pages में deploy करें, **set-admin.cjs और निजी credentials deploy न करें**।
7. Customer register, login, own request, admin request/status, logout और unauthorized access टेस्ट करें।

## सुरक्षा और सीमाएँ
- ग्राहक registration से `role:customer` प्रोफाइल बनती है। `role:admin` फील्ड अकेली admin अधिकार नहीं देती।
- Firebase Custom Claim के बिना Admin Dashboard काम नहीं करेगा।
- ग्राहक सेवा अनुरोध केवल पूछताछ है; सरकारी/बैंक आवेदन या भुगतान नहीं।
- पुराने Homepage में कुछ tool links पहले से मौजूद हैं लेकिन ZIP में उनकी HTML फाइलें नहीं थीं। इसलिए वे links अभी काम नहीं करेंगे जब तक उनकी फाइलें अलग से न जोड़ी जाएँ।
- GitHub Pages के root में files रखने पर relative links काम करेंगे। यदि अलग folder में deploy करते हैं तो paths जाँचें।
- यह प्रारंभिक implementation है; production में email verification, abuse protection, privacy policy, request limits, indexes, security-rule tests और consent/privacy review जोड़ें।
