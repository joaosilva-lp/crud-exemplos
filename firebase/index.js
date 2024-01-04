// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, updateDoc, deleteDoc, deleteField, getDoc } from "firebase/firestore";

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
    const docRef = await addDoc(collection(db, "city"), {
      name: "Coimbra",
      country: "Portugal"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})();
*/
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

/*
#####UDDATE######
(async()=>{
  try {
    const cityDocRef = doc(db, "cities", "9GNz3ANhQAm0T6Wyj59H");
    await updateDoc(cityDocRef, {
      river2: "Sado",
      bairros: {
        centro: {
          1: "vila mariana",
          2: "vila clementino",
          3: "paulista",
          4: "brigadeiro"
        },
        baixa: "baixa"
      }
    })
    console.log("Registo criado com sucesso")
  } catch (error) {
      console.log(error)
  }
})();*/


/*
//deleteDoc() Apaga toda a collection
(async()=>{
  try {
    const cityDocRef = doc(db, "city", "jkY8DnsN7054d0whPT1w");
    await deleteDoc(cityDocRef)
    console.log("The entire Document was deleted")
  } catch (error) {
      console.log(error)
  }
})();
*/

/*
//deleteField()
(async()=>{
  try {
    const cityDocRef = doc(db, "city", "jkY8DnsN7054d0whPT1w");
    await updateDoc(cityDocRef, {
      country: deleteField()
    })
    console.log("Registo apagado com sucesso")
  } catch (error) {
      console.log(error)
  }
})();
*/
/*
//Get Document Data By ID From a Collection Using getDoc()
(async()=>{
  try {
    const cityDocRef = doc(db, "city", "9Mbj98LfqRSIDtzzzPTp");
    const docData = await getDoc(cityDocRef)

    console.log(docData.data())
  } catch (error) {
      console.log(error)
  }
})();
//output { name: 'Braga', country: 'Portugal' }

*/