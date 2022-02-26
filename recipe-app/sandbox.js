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


//making it to the list
const list=document.querySelector("ul");
//taking value from the form
const form=document.querySelector("form");

// populating the recipes from firebase to the page 
const  addRecipie=(recipe)=>{
  let html=`
  <li>🥗 ${recipe.foodTitle} - ${recipe.time.toDate()}</li>
  `;
  list.innerHTML+=html;
  console.log(html)
}

//Getting the data from the firebase
async function getRecipes(db){
  const recepiesCol=collection(db,"receipies");
  const recipeSnapShot=await getDocs(recepiesCol);
  const recipeList=recipeSnapShot.docs.map((recipe)=>{
    console.log("Get Recipie -> Recipie.data()",recipe.data());
    addRecipie(recipe.data())
  }
   );
  return recipeList;
}

//Taking value from the form and saving it into the firebase
form.addEventListener("submit",async(e)=>
{
e.preventDefault();
const now=new Date();
const recipe={
  foodTitle:form.recipie.value,
  time:Timestamp.fromDate(now)
}
const decRef=await addDoc(collection(db,"receipies"),recipe)
})




const recipes=await getRecipes(db);
console.log(recipes);