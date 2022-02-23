import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoRtFxoCYiqLApdkymGa_QOxlqxApix6U",
  authDomain: "devpractice-8b0e5.firebaseapp.com",
  projectId: "devpractice-8b0e5",
  storageBucket: "devpractice-8b0e5.appspot.com",
  messagingSenderId: "240679929775",
  appId: "1:240679929775:web:1bbb9f659236ffcf1e115a",
  measurementId: "G-B0ZCJNW4EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase intialize
const db=getFirestore(app);

async function getRecipes(db){
  const recepiesCol=collection(db,"receipies");
  const recipeSnapShot=await getDocs(recepiesCol);
  const recipeList=recipeSnapShot.docs.map((recipe)=>
  recipe.data());
  return recipeList;
}

const recipes=await getRecipes(db);
console.log(recipes);