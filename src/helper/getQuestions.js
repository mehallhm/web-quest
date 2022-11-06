import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";




// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

( async () => {
const querySnapshot = await getDocs(collection(db, "questions"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
})();

console.log(querySnapshot);