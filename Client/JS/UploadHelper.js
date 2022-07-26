import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../Server/Secure/Firebase";

export default function uploadFile(files, folder) {
    files.forEach(file => {
        const storageRef = ref(storage, `${folder}/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log(JSON.stringify(snapshot));
          });
    });
} 