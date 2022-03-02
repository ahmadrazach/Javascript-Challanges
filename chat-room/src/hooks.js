import {useEffect,useState} from "react";
import { onAuthStateChanged } from "firebase/auth";


  export function useAuthState(auth) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(() => auth.currentUser);
  
    useEffect(() => {
      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(false);
        }
        if (initializing) {
          setInitializing(false);
        }
      });
  
      // Cleanup subscription
      return unsubscribe;
    }, [auth, initializing]);
  
    return { user, initializing };
  }