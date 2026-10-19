// केवल अपने कंप्यूटर पर चलाएँ; GitHub पर service-account.json कभी अपलोड न करें।
// npm install firebase-admin
// GOOGLE_APPLICATION_CREDENTIALS environment variable को निजी JSON path पर सेट करें।
const admin = require('firebase-admin');
admin.initializeApp({credential:admin.credential.applicationDefault()});
const uid=process.argv[2];
if(!uid){console.error('Usage: node set-admin.cjs FIREBASE_AUTH_UID');process.exit(1)}
(async()=>{const user=await admin.auth().getUser(uid);const existing=user.customClaims||{};await admin.auth().setCustomUserClaims(uid,{...existing,admin:true});console.log('Admin claim set for UID:',uid,'; user must sign out and sign in again.')})().catch(e=>{console.error(e);process.exit(1)});
