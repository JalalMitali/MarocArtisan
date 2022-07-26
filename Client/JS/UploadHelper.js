import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../Server/Video/FirebaseStorage";

export default function uploadFile(files, folder) {
    files.forEach(file => {
        const storageRef = ref(storage, `${folder}/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log(JSON.stringify(snapshot));
          });
    });
} 