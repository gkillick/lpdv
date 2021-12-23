// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import { addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


async function getCities(db) {
  const items = collection(db, 'items');
  const itemsDocs = await getDocs(items);
  const itemList = itemsDocs.docs.map(doc => doc.data())
  return itemList
}





// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyCwknUrYFxAgmd-qxlFUPmuibMa2v6MFsQ",
  authDomain: "lpdv-cdf2e.firebaseapp.com",
  databaseURL: "https://lpdv-cdf2e.firebaseio.com",
  projectId: "lpdv-cdf2e",
  storageBucket: "lpdv-cdf2e.appspot.com",
  messagingSenderId: "646373345066",
  appId: "1:646373345066:web:a4ecfb496ce3b16b740053",
  measurementId: "G-LGCHNE4F87"
};



// Initialize Firebase
const app2 = initializeApp(firebaseConfig2, "Secondary");

const db2 = getFirestore(app2);

getCities(db2).then((items) => {
  const itemList = []
  items.filter(item => {
    return !item.sliced
  }).forEach(item => {
    if(item.user_id == "limgh6ru2iEXMHaWDlOU"){
      if(item.sliced_option) {
        const sliced = {
          item_type: item.item_type,
          name: item.name,
          price: parseFloat(item.price),
          sliced_option: true,
          tax_catagory: item.tax_catagory,
        }
        itemList.push(sliced)
      } else {
        const notSliced = {
          item_type: item.item_type,
          name: item.name,
          price: parseFloat(item.price),
          sliced_option: false,
          tax_catagory: item.tax_catagory,
        }
        itemList.push(notSliced)
      }
    }
  })
  fs.writeFileSync('./items.json', JSON.stringify(itemList))
})
