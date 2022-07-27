import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../Secure/Firebase";

export default function uploadFile(files, folder) {
    files.forEach(file => {
        const storageRef = ref(storage, `${folder}/${file.name}${+new Date}`);
        uploadBytes(storageRef, file).then((snapshot) => {
        });
    });
} 