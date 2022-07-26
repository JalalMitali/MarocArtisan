import { firebaseApp } from '../Secure/Firebase'
import { getAuth } from 'firebase/auth'

const auth = getAuth(firebaseApp);

export function SMSRequest(lang, phoneNumber) {
  auth.languageCode = lang;
  let confirm;
  const appVerifier = window.recaptchaVerifier;
  const phone = `+212${phoneNumber}`;
  auth.languageCode = lang;
  let solved = false;
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      solved = true;
    }
  }, auth);
  if(solved) {
    return signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          return confirm = confirmationResult
        });
  }
  }
  export function SMSVerify(code, confirmationResult) {
  let data = [null, null];
  return confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    return data = [user, 0];
  });
}
