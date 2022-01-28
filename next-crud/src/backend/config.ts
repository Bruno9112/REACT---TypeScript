import firebase from "firebase";
import "firebase/firestore"

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyBFXkQ7nEJXV2lcp8MZgoxLpwfZD8Ecz8M",
        authDomain: "next-crud-a5fea.firebaseapp.com",
        projectId: "next-crud-a5fea",
    })
}

export default firebase