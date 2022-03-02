import './App.css';
//Initializing Firebase in your app and create a Firebase App object:
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider ,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Button from "./components/Button"
//import hooks
import {useAuthState} from './hooks'
import Channel from "./components/Channel"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNuSTgFCWlpPAGl4AjgsuLSCiKHBlMT4",
  authDomain: "chat-room-6f417.firebaseapp.com",
  projectId: "chat-room-6f417",
  storageBucket: "chat-room-6f417.appspot.com",
  messagingSenderId: "815883654830",
  appId: "1:815883654830:web:f298e5e37f186bedc2bf3f",
  measurementId: "G-3PMMBMV5F8"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();




function App() {
const {user,initializing}=useAuthState(auth);
//Implementing onClick event 
//retrieve Google provider object (https://firebase.google.com/docs/auth/web/google-signin)
const signInWithGoogle=async()=>{

  const provider= new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //set Language to the default browser prefrence
  
  auth.languageCode='it';

  //console.log("aya")
  //Starting sign In process
  try{
    await signInWithPopup(auth,provider);
    //console.log("aya try")

  }catch(error){
    //console.log("aya eror ")
    //console.log(error.code);
    console.log(error.message);
  }
};
//signing out function
const signOutFunc = async () => {
 // sign
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.code)
    console.log(error.message);
  }
};

  const renderContent=()=>{
    if(initializing){
      return (
        <div>
          <h3>Loading</h3>
        </div>
      )
    }

    if (user) return <Channel user={user}/>;
    
    return (
      <div>
        <div>
          <h2>ChatRoom</h2>
          <p>Chat with people all around you </p>
          <button
            onClick={signInWithGoogle}
          >Sign in with Google</button>  
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <header>
        <a href="https://ahmadrazach.github.io"> Logo</a>
        <div>
            {
              user ? (
               <button 
                  onClick={signOut}
                >Sign Out</button>
              ) : null
            }
        </div>
      </header>
      <main>
        {renderContent()}
      </main>
    
  </div>
  );
}

export default App;


//hooks.js