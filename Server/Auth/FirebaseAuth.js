import { auth } from '../Secure/Firebase'
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth'

export function SMSRequest(lang, phoneNumber) {
  auth.languageCode = lang;
  const phone = `+212${phoneNumber}`;
  auth.languageCode = lang;
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible'
  }, auth);
  const appVerifier = window.recaptchaVerifier;
  return signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          return confirmationResult;
        });
      }

export function SMSVerify(code, confirmationResult) {
  const promise = new Promise((res, rej) => {
    confirmationResult.confirm(code)
    .then((result) => {
      const authCredential = PhoneAuthProvider.credential(confirmationResult.verificationId, code);
      //const userCredential = signInWithCredential(auth, authCredential);
      //signInWithCredential(userCredential);
      signInWithCredential(auth, authCredential);
      const user = result.user;
      return user;
    })});
  return promise;
}
