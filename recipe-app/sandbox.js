        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
          
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
        const analytics = getAnalytics(app);