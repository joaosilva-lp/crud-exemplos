// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI5C6mqFFtIkZF3tAz9fI4NVLYsplb9oA",
  authDomain: "crud-901fa.firebaseapp.com",
  projectId: "crud-901fa",
  storageBucket: "crud-901fa.appspot.com",
  messagingSenderId: "1058240680805",
  appId: "1:1058240680805:web:951994ff505b3583f4078c",
  measurementId: "G-905841V1XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/*
// Add a document to the "users" collection
(async () => {
  try {
    const docRef = await addDoc(collection(db, "clients"), {
      name: "Mondegovidro - Soluções em Vidro Lda",
      country: "Portugal"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})();*/

/*
 //setDoc()
(async () => {
  try {
    const carDocRef = doc(db, "clientes", "513843922");
    await setDoc(carDocRef, {
      nome: "Mondegovidro - Soluções em Vidro, Lda",
      taxNumber: 513843922,
      year: 2016
    });
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
})();
*/
/*
(async()=>{
  try {
    const cityDocRef = doc(db, "cities", "9GNz3ANhQAm0T6Wyj59H");
    await setDoc(cityDocRef, {
      river: "Vancouver"
    }, {merge:true})
    console.log("Registo criado com sucesso")
  } catch (error) {
      console.log(error)
  }
})();
*/

(async()=>{
  try {
    const cityDocRef = doc(db, "cities", "9GNz3ANhQAm0T6Wyj59H");
    await updateDoc(cityDocRef, {
      river: "Sado"
    }, {merge:true})
    console.log("Registo criado com sucesso")
  } catch (error) {
      console.log(error)
  }
})();