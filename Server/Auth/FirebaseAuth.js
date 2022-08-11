import { auth } from '../Secure/Firebase'
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential, GoogleAuthProvider, linkWithCredential, linkWithRedirect } from 'firebase/auth'
import { connectToDatabase } from '../Database/MongoDB';

export function SMSRequest(lang, phoneNumber) {
  auth.languageCode = lang;
  const phone = `+212${phoneNumber}`;
  auth.languageCode = lang;
  if(window.recaptchaVerifier === null || typeof window.recaptchaVerifier === "undefined") {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
    }, auth);
  }
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
      connectToDatabase().then((client, db) => { 
        const users = db.collection("Users");
        const user = result.user;
        users.insertOne(user);
      }).catch((error) => {
        return [error.code, error.message]
      });
      return [0, ""];
    })});
  return promise;
}

export const GoogleVerify = (lang) => {
  const provider = new GoogleAuthProvider();
  auth.languageCode = lang;
  connectToDatabase().then((client, db) => {

    const users = db.collection("Users");
    linkWithRedirect(auth.currentUser, provider).then(() => {
      getRedirectResult(auth).then((result) => {
        const credential = provider.credentialFromResult(result);
        if (credential) {
         // Get reference to the currently signed-in user
        const prevUser = auth.currentUser;
    
        // Get the data which you will want to merge. This should be done now
        // while the app is still signed in as this user.
        const prevUserData = users.find
    
        // Delete the user's data now, we will restore it if the merge fails
        repo.delete(prevUser);
    
        // Sign in user with the account you want to link to
        signInWithCredential(auth, newCredential).then((result) => {
          console.log("Sign In Success", result);
          const currentUser = result.user;
          const currentUserData = repo.get(currentUser);
    
          // Merge prevUser and currentUser data stored in Firebase.
          // Note: How you handle this is specific to your application
          const mergedData = repo.merge(prevUserData, currentUserData);
    
          const credential = OAuthProvider.credentialFromResult(result);
          return linkWithCredential(prevUser, credential)
            .then((linkResult) => {
              // Sign in with the newly linked credential
              const linkCredential = OAuthProvider.credentialFromResult(linkResult);
              return signInWithCredential(auth, linkCredential);
            })
            .then((signInResult) => {
              // Save the merged data to the new user
              repo.set(signInResult.user, mergedData);
            });
        }).catch((error) => {
          // If there are errors we want to undo the data merge/deletion
          console.log("Sign In Error", error);
          repo.set(prevUser, prevUserData);
        });
      }
      });
    })
  }).catch((error) => {
    
  });
}