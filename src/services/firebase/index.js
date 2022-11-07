import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIzJZHHvrvqte5phzhuWxyh7zkf09RqNQ",
  authDomain: "chiapponeshopping.firebaseapp.com",
  projectId: "chiapponeshopping",
  storageBucket: "chiapponeshopping.appspot.com",
  messagingSenderId: "295022185524",
  appId: "1:295022185524:web:031d04e3760e1a793c4e61"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)