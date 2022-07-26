import { auth } from '../Secure/Firebase'
import { RecaptchaVerifier } from 'firebase/auth'

export function SMSRequest(lang, phoneNumber) {
  auth.languageCode = lang;
  let confirm;
  let error = 0;
  const appVerifier = window.recaptchaVerifier;
  const phone = `+212${phoneNumber}`;
  auth.languageCode = lang;
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      return signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          return confirm = confirmationResult
        }).catch((err) => {
          error = err;
        });
    }
  }, auth);
  return [confirm, error];
  }
  export function SMSVerify(code, confirmationResult) {
  let data = [null, null];
  confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    data = [user, 0];
  }).catch((err) => {
    data = ["", err]
  });
  return data;
}
