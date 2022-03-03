import {useEffect,useState,useRef} from "react";
import { onAuthStateChanged } from "firebase/auth";
import {isEqual} from "firebase/database"
import {doc,onSnapshot} from "firebase/firestore"
//useFirestoreQuery function
export function useFirestoreQuery(query){
    const[docs,setDocs]=useState([]);
    //store current query in ref
    const queryRef=useRef(query);
    //compare current query with the previous one
    useEffect(()=>{
        //use Firestore built-in 'is_Equal method
        //to compare queries
        console.log("hooks -> useEffect()",query)
        if(!queryRef?.curent?.isEqual(query)){
            queryRef.current=query;
            console.log("hooks -> useEffect()->if",queryRef)
        }
    });
    //Re-run data listenet only if query has changed
    useEffect(()=>{
        if(!queryRef.current){
            return null;
        }
        //Subscribe to query with onSnapShot
        const unsubscribe=onSnapshot(queryRef,querySnapshot=>{
            //Get all the documents from collection - with IDs
            const data=querySnapshot.docs.map(doc=>({
                ...doc.data(),
                id:doc.id,
            }));
            //Update state
            setDocs(data);
        });
        //Detach listener
        return unsubscribe;
    },[queryRef]);
    return docs;
}
//useAuthState function
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