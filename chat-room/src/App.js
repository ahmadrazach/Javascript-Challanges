import './App.css';
//Initializing Firebase in your app and create a Firebase App object:
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider ,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Button from "./components/Button"
//import hooks
//import {firebase} from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';
import {useAuthState} from './hooks'
import Channel from "./components/Channel"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ebf_ptxv6aeKBzgLBAZBzIK9gjuHrgQ",
  authDomain: "chatroom-c38f6.firebaseapp.com",
  projectId: "chatroom-c38f6",
  storageBucket: "chatroom-c38f6.appspot.com",
  messagingSenderId: "369968393968",
  appId: "1:369968393968:web:d9abc51d057547ec0b5c35"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();



function App() {

  //console.log("App.js->auth()",auth)
  const provider= new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //set Language to the default browser prefrence
  auth.languageCode='it';

const {user,initializing}=useAuthState(auth);
 
//console.log("App.js->user",user)
//Implementing onClick event
//retrieve Google provider object (https://firebase.google.com/docs/auth/web/google-signin)
const signInWithGoogle=async()=>{



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
                  onClick={signOutFunc}
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