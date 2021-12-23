// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as fs from 'fs'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-vjp6tRPDSF1XCEXbUTiDpgcLbbD2sg",
  authDomain: "fir-course-8fd22.firebaseapp.com",
  projectId: "fir-course-8fd22",
  storageBucket: "fir-course-8fd22.appspot.com",
  messagingSenderId: "973664061871",
  appId: "1:973664061871:web:da4f8b791a307e9c29075a"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

const db = getFirestore(app);




// Add a new document with a generated id.



async function addList(el, db) {
    const docRef = await addDoc(collection(db, "items"), el);
}


fs.readFile("items.json", "utf8", (err, jsonString) => {
  const data = JSON.parse(jsonString)

  data.forEach(el => {
    console.log(el)
    const element = {...el, uid: "PcUGtclKf4bU5ovcWCgtvIrVc0H2"}
    addList(element, db)
  })
})



