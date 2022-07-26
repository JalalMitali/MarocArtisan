import { getStorage } from "firebase/storage";
import { firebaseApp } from '../Secure/Firebase'

export const storage = getStorage(firebaseApp);
