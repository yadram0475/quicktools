# Khojiman.com Dashboard Starter

यह starter GitHub Pages + Firebase के लिए है और आपकी मौजूदा `index.html`/टूल फाइलों को overwrite नहीं करता।

## सेटअप
1. GitHub repository का backup/branch बनाएं।
2. ZIP की `account/` और `functions/` फाइलें repo में जोड़ें; पुरानी फाइलें न हटाएं।
3. Firebase Console में project बनाएं; Authentication > Email/Password चालू करें।
4. Firebase web app बनाकर config `account/firebase-config.js` में भरें।
5. Firestore Database बनाएं और `firestore.rules` को review करके deploy करें।
6. Firebase Authentication > Settings में `khojiman.com` और `www.khojiman.com` authorized domains में जोड़ें।
7. GitHub Pages पर publish करके `/account/` खोलें और test account से जांचें।

## जरूरी सुरक्षा
- अभी रीचार्ज फॉर्म केवल अनुरोध बनाता है; असली पेमेंट नहीं लेता और वॉलेट बैलेंस नहीं बढ़ाता।
- असली payment के लिए server-side order, provider webhook signature verification, idempotency और सुरक्षित Cloud Functions/backend जरूरी हैं।
- Payment secret key कभी HTML/JS/GitHub में न रखें।
- Admin role browser से सेट न करें; केवल trusted Admin SDK environment से custom claim दें।
- यह शुरुआती template है, production-ready financial system नहीं। Live करने से पहले security review कराएं।
- यदि Firebase Functions deploy करेंगे तो Firebase plan/billing की शर्तें लागू हो सकती हैं।
