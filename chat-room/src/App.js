import './App.css';
//Initializing Firebase in your app and create a Firebase App object:
import { initializeApp } from 'firebase/app';

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

function App() {
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
